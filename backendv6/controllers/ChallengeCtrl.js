const Challenge = require('../models/ChallengeModel');
const User = require('../models/UserModel');
var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require("nodemailer");
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

const addFile = async (req) => {
  if (!req.file) {
    throw new Error('No dataset file uploaded');
  }
  const allowedTypes = ['application/pdf', 'text/csv', 'application/vnd.ms-excel'];
  if (!allowedTypes.includes(req.file.mimetype)) {
    throw new Error('Dataset file type not supported');
  }
  const base64File = req.file.buffer.toString('base64');
  return {
    data: base64File,
    contentType: req.file.mimetype
  };
};


exports.searchChallengeByCompanyName = async (req, res) => {
  try {
    const { companyName } = req.params;

    const regex = new RegExp(companyName, 'i');

    const challenges = await Challenge.find({ companyName: regex });

    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search challenges', error: error.message });
  }
};


exports.searchChallengeByName = async (req, res) => {
  try {
    const { challengeName } = req.params;

    const regex = new RegExp(challengeName, 'i');

    const challenges = await Challenge.find({ challengeName: regex });

    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search challenges', error: error.message });
  }
};
exports.createChallenge = async (req, res) => {
  try {
    const { challengeName, prizeType, prizeAmount, giftType, freelanceSubject, internshipSubject, companyName, startDate, deadline, description } = req.body;

    const startDateTime = new Date(Date.parse(startDate));
    const endDateTime = new Date(Date.parse(deadline));
    const currentDateTime = new Date();
    let status = "";

    if (currentDateTime < startDateTime) {
      status = "coming soon";
    } else if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
      status = "ongoing";
    } else {
      status = "expired";
    }

    const newChallengeData = {
      challengeName,
      companyName,
      startDate,
      deadline,
      description,
      status
    };
    if (req.file) {
      const picture = await addImage(req);
      newChallengeData.picture = picture;
    }

    // if (req.file) {
    //   const dataset = await addFile(req);
    //   newChallengeData.dataset = dataset;
    // }


    if (prizeType === 'monitoring') {
      newChallengeData.prizeType = 'monitoring';
      newChallengeData.prizeAmount = prizeAmount;
    } else if (prizeType === 'non-monitoring') {
      newChallengeData.prizeType = 'non-monitoring';
      newChallengeData.giftType = giftType;
    } else if (prizeType === 'freelanceOpportunitie') {
      newChallengeData.prizeType = 'non-monitoring';
      newChallengeData.freelanceSubject = freelanceSubject;
      newChallengeData.freelanceStartDate = req.body.freelanceStartDate;
      newChallengeData.freelanceEndDate = req.body.freelanceEndDate;
      newChallengeData.freelanceRenumeration = req.body.freelanceRenumeration;
      newChallengeData.freelanceRequirement = req.body.freelanceRequirement;
    } else if (prizeType === 'internship') {
      newChallengeData.prizeType = 'non-monitoring';
      newChallengeData.internshipSubject = internshipSubject;
      newChallengeData.internshipStartDate = req.body.internshipStartDate;
      newChallengeData.internshipEndDate = req.body.internshipEndDate;
      newChallengeData.internshipRenumeration = req.body.internshipRenumeration;
      newChallengeData.internshipRequirement = req.body.internshipRequirement;
    }

   
    
    const newChallenge = new Challenge(newChallengeData);

    await newChallenge.save();
    const users = await User.find(); // Fetch all users
    const verificationLink = 'http://localhost:3001/shop'; // Change this to your verification link
    const verificationCode = '123456'; // Change this to your verification code

    // Loop through all users and send notification email
    for (const user of users) {
      await sendNotificationEmail(user.email, challengeName, verificationLink, verificationCode);
    }

    res.status(201).json({ success: true, message: 'Challenge created successfully', challenge: newChallenge });
  } catch (error) {
    console.error('Error creating challenge:', error);
    res.status(500).json({ message: 'Failed to create Challenge', error: error.message });
  }
};
// exports.createChallenge = async (req, res) => {
//   try {
//     const { challengeName, prizeType, prizeAmount, giftType, freelanceSubject, internshipSubject, companyName,bareme, startDate, deadline, description } = req.body;

//     const startDateTime = new Date(Date.parse(startDate));
//     const endDateTime = new Date(Date.parse(deadline));
//     const currentDateTime = new Date();
//     let status = "";

//     if (currentDateTime < startDateTime) {
//       status = "coming soon";
//     } else if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
//       status = "ongoing";
//     } else {
//       status = "expired";
//     }

//     const newChallengeData = {
//       challengeName,
//       companyName,
//       bareme,
//       startDate,
//       deadline,
//       description,
//       status
//     };
//     if (req.file) {
//       const picture = await addImage(req);
//       newChallengeData.picture = picture;
//     }

//     // if (req.file) {
//     //   const dataset = await addFile(req);
//     //   newChallengeData.dataset = dataset;
//     // }


//     if (prizeType === 'monitoring') {
//       newChallengeData.prizeType = 'monitoring';
//       newChallengeData.prizeAmount = prizeAmount;
//     } else if (prizeType === 'non-monitoring') {
//       newChallengeData.prizeType = 'non-monitoring';
//       newChallengeData.giftType = giftType;
//     } else if (prizeType === 'freelanceOpportunitie') {
//       newChallengeData.prizeType = 'non-monitoring';
//       newChallengeData.freelanceSubject = freelanceSubject;
//       newChallengeData.freelanceStartDate = req.body.freelanceStartDate;
//       newChallengeData.freelanceEndDate = req.body.freelanceEndDate;
//       newChallengeData.freelanceRenumeration = req.body.freelanceRenumeration;
//       newChallengeData.freelanceRequirement = req.body.freelanceRequirement;
//     } else if (prizeType === 'internship') {
//       newChallengeData.prizeType = 'non-monitoring';
//       newChallengeData.internshipSubject = internshipSubject;
//       newChallengeData.internshipStartDate = req.body.internshipStartDate;
//       newChallengeData.internshipEndDate = req.body.internshipEndDate;
//       newChallengeData.internshipRenumeration = req.body.internshipRenumeration;
//       newChallengeData.internshipRequirement = req.body.internshipRequirement;
//     }

   
//     const newChallenge = new Challenge(newChallengeData);

//     await newChallenge.save();

//     res.status(201).json({ success: true, message: 'Challenge created successfully', challenge: newChallenge });
//   } catch (error) {
//     console.error('Error creating challenge:', error);
//     res.status(500).json({ message: 'Failed to create Challenge', error: error.message });
//   }
// };


exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();

    res.status(200).json(challenges.map(challenge => ({
      ...challenge._doc,
      status: challenge.calculateStatus() 
    })));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch challenges', error: error.message });
  }
};
exports.updateChallenge = async (req, res) => {
  try {
    const { challengeName,prizeType,tags,prizeAmount, companyName, startDate, deadline, description ,bareme} = req.body;
    const challengeId = req.params.id;
    
    if (!challengeId) {
      return res.status(400).json({ message: "Challenge ID is missing or invalid" });
    }
    if ('bareme' in req.body) {
      findChallenge.bareme = bareme;
    }
    
    let findChallenge = await Challenge.findById(challengeId);
    
    if (!findChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    
    const startDateTime = new Date(startDate);
    const endDateTime = new Date(deadline);
    const currentDateTime = new Date();
    let status = "";
    if (currentDateTime < startDateTime) {
      status = "coming soon";
    } else if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
      status = "ongoing";
    } else {
      status = "expired";
    }
    
    findChallenge.challengeName = challengeName;
    findChallenge.prizeAmount = prizeAmount;
    findChallenge.companyName = companyName;
    findChallenge.startDate = startDate;
    findChallenge.deadline = deadline;
    findChallenge.description = description;
    findChallenge.status = status;
    findChallenge.prizeType=prizeType;
    findChallenge.bareme=bareme;
     findChallenge.tags=tags;
     if (req.file && req.file.fieldname === 'picture') {
      const picture = await addImage(req);
      newChallengeData.picture = picture;
    }
    
    if (req.file && req.file.fieldname === 'dataset') {
      const dataset = await addFile(req);
      newChallengeData.dataset = dataset;
    }
    
   
    await findChallenge.save();
    
    res.json({ success: true, message: 'Challenge updated successfully' });
  } catch (error) {
    console.error('Error updating challenge:', error);
    res.status(500).json({ message: 'Failed to update challenge', error: error.message });
  }
};
exports.getChallengeById = async (req, res) => {
  try {
    const challengeId = req.params.id;

    if (!challengeId) {
      return res.status(400).json({ message: "Challenge ID is missing or invalid" });
    }

    const challenge = await Challenge.findById(challengeId);

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json({ success: true, challenge });
  } catch (error) {
    console.error('Error fetching challenge by ID:', error);
    res.status(500).json({ message: 'Failed to fetch challenge by ID', error: error.message });
  }
};
exports.deleteChallenge = async (req, res) => {
    try {
      const challengeId = req.params.id;
  
      if (!challengeId) {
        return res.status(400).json({ message: "Challenge ID is missing or invalid" });
      }
  
      const deletedChallenge = await Challenge.findByIdAndDelete(challengeId);
  
      if (!deletedChallenge) {
        return res.status(404).json({ message: "Challenge not found" });
      }
  
      res.json({ success: true, message: 'Challenge deleted successfully' });
    } catch (error) {
      console.error('Error deleting challenge:', error);
      res.status(500).json({ message: 'Failed to delete challenge', error: error.message });
    }
  };


  exports.addToFavorites = async (req, res) => {
    try {
      const { challengeId } = req.body;
  
      const userId = req.user.id;
  
      const user = await User.findById(userId);
  
      const challenge = await Challenge.findById(challengeId);
  
      if (!user || !challenge) {
        return res.status(404).json({ success: false, message: 'User or challenge not found' });
      }
  
      if (user.favoriteChallenges.includes(challengeId)) {
        return res.status(400).json({ success: false, message: 'Challenge already exists in favorites' });
      }
  
      user.favoriteChallenges.push(challengeId);
      await user.save();
  
      challenge.likes++;
      await challenge.save();
  
      res.status(200).json({ success: true, message: 'Challenge added to favorites successfully' });
    } catch (error) {
      console.error('Error adding challenge to favorites:', error);
      res.status(500).json({ success: false, message: 'Failed to add challenge to favorites', error: error.message });
    }
  };
  

  exports.removeFromFavorites = async (req, res) => {
    try {
      const { challengeId } = req.body;
      const userId = req.user.id;
  
      const user = await User.findById(userId);
      const challenge = await Challenge.findById(challengeId);
  
      if (!user || !challenge) {
        return res.status(404).json({ success: false, message: 'User or challenge not found' });
      }
  
      // Check if the challenge exists in favorites
      if (!user.favoriteChallenges.includes(challengeId)) {
        return res.status(400).json({ success: false, message: 'Challenge does not exist in favorites' });
      }
  
      // Remove the challenge from favorites
      user.favoriteChallenges = user.favoriteChallenges.filter(id => id !== challengeId);
      await user.save();
  
      // Decrement the number of likes for the challenge
      if (challenge.likes > 0) {
        challenge.likes--;
        await challenge.save();
      }
  
      res.status(200).json({ success: true, message: 'Challenge removed from favorites successfully' });
    } catch (error) {
      console.error('Error removing challenge from favorites:', error);
      res.status(500).json({ success: false, message: 'Failed to remove challenge from favorites', error: error.message });
    }
  };
  

  
exports.getUserFavorites = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find the user and populate the favoriteChallenges field
    const user = await User.findById(userId).populate('favoriteChallenges');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, favoriteChallenges: user.favoriteChallenges });
  } catch (error) {
    console.error('Error getting user favorites:', error);
    res.status(500).json({ success: false, message: 'Failed to get user favorites', error: error.message });
  }
}; 