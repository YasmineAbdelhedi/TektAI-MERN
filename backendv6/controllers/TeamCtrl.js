const Team = require('../models/TeamModel');
const Challenge = require('../models/ChallengeModel');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const User = require('../models/UserModel');



const addImage = async (req) => {
  if (!req.file) {
    throw new Error('No image file uploaded');
  }
  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype
  };
};
exports.createTeam = async (req, res) => {
  try {
    console.log(req.body);
    console.log('User information:', req.user);
    console.log('User ID:', req.user.id);

    const { name, challenge, members, skillRequirement, teamSize } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: 'Invalid user information' });
    }

    if (!members || !Array.isArray(members) || members.length === 0) {
      return res.status(400).json({ message: 'No members provided or members is not an array' });
    }

    // Check if the user or any member is already subscribed to the challenge
    const existingTeams = await Team.find({
      $or: [
        { leader: req.user.id },
        { members: { $in: members.map(memberId => memberId) } }
      ],
      challenge: challenge
    });

    if (existingTeams.length > 0) {
      return res.status(400).json({ message: 'One or more members are already subscribed to this challenge' });
    }

    const newTeam ={
      name,
      leader: req.user.id,
      challenge,
      skillRequirement,
      teamSize,
      members
    };

    // Add picture if available
    if (req.file) {
      const picture = await addImage(req);
      newTeam.picture = picture;
    }

    const newTeamData = new Team(newTeam);
    await newTeamData.save();

    // Update the challenge with the new team ID
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challenge,
      { $push: { teams: newTeamData._id } },
      { new: true }
    );

    if (!updatedChallenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    // Send invitation emails to team members
    // Implement email sending logic here

    res.status(201).json({ newTeamData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// exports.createTeam = async (req, res) => {
//   try {
//     console.log('User information:', req.user);
//     console.log('User ID:', req.user.id);

//     const { name, challenge, members, skillRequirement, teamSize} = req.body;

//     if (!req.user || !req.user.id) {
//       return res.status(400).json({ message: 'Invalid user information' });
//     }

//     if (!members || !Array.isArray(members) || members.length === 0) {
//       return res.status(400).json({ message: 'No members provided or members is not an array' });
//     }

//     const newTeam ={
//       name,
//       leader: new mongoose.Types.ObjectId(req.user.id),
//       challenge: new mongoose.Types.ObjectId(challenge),
//       skillRequirement,
//       teamSize,
//       members: members.map(memberId => new  mongoose.Types.ObjectId(memberId))
//     };

//     if (req.file) {
//       const picture = await addImage(req);
//       newTeam.picture = picture;
//     }
//     const newTeamData = new Team(newTeam);

//     await newTeamData.save();

//     const updatedChallenge = await Challenge.findByIdAndUpdate(
//       challenge,
//       { $push: { teams: newTeamData._id } },
//       { new: true }
//     );
    
//     if (!updatedChallenge) {
//       return res.status(404).json({ message: 'Challenge not found' });
//     }

//     const populatedTeam = await Team.findById(newTeamData._id).populate('challenge');

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       transportMethod: "SMTP",
//       secureConnection: false,
//       port: 465,
//       secure: true,
//       auth: {
//         user: "tektaitheoriginals@gmail.com",
//         pass: "cvxv sflh anot dark",
//       },
//       tls: {
//         rejectUnauthorized: false
//       },
//     });

//     for (const memberId of members) {
//       const user = await User.findById(memberId);
//       const userEmail = user.email;

//       const mailOptions = {
//         from: 'tektaitheoriginals@gmail.com',
//         to: userEmail,
//         subject: 'TektAi Team invitation',
//         text: `Hello, you have been added to the team ${newTeamData.name} for the challenge ${updatedChallenge.challengeName}.`
//       };

//       await transporter.sendMail(mailOptions);
//     }

//     res.status(201).json({ newTeamData: populatedTeam });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


exports.getAllTeams = async (req, res) => {
  try {
   
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.updateTeamMembers = async (req, res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (team.leader.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }
        
        await team.save();
        res.json(team);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const team = await Team.findById(req.params.teamId);
        if (team.leader.toString() !== req.user.id.toString()) {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }
        await team.remove();
        res.json({ message: 'Team deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getTeamById = async (req, res) => {
    try {
      const team = await Team.findById(req.params.teamId);
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(200).json(team);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.addMemberToTeam = async (req, res) => {
    try {
      const team = await Team.findById(req.params.teamId);
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      const { memberId } = req.body;
      if (team.members.includes(memberId)) {
        return res.status(400).json({ message: 'Member already exists in the team' });
      }
      team.members.push(memberId);
      await team.save();
      res.status(200).json({ message: 'Member added to the team successfully', team });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  