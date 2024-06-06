const User = require('../models/UserModel');
const Company = require('../models/CompanyModel');
const authMiddleware = require('../middleware/authMiddleware');
let jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const twilio = require('twilio');
require('dotenv').config();



const addImage = async (req) => {
  if (!req.file) {
    // If no file is uploaded, return null or handle the case as needed
    return null;
  }

  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype
  };
};
exports.searchUserByName = async (req, res) => {
  try {
    const { name } = req.params;


    const regex = new RegExp(name, 'i');

    const users = await User.find({
      $or: [
        { firstname: regex },
        { lastname: regex } 
      ]
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search users', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
};



exports.createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, profession, phone_number, country, password, retypePassword, isCompany } = req.body;

    const existingCompany = await Company.findOne({ email }); 
    const verificationCode = generateVerificationCode();

    if (existingCompany) {
      const newUser = new User({ firstname, lastname, email, profession, phone_number, country, password, retypePassword, isCompany: existingCompany._id, verificationCode });
      await newUser.save();
      res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
    } else {
      const newUser = new User({ firstname, lastname, email, profession, phone_number, country, password, retypePassword,isCompany, verificationCode });
      await newUser.save();
      const verificationLink = `http://localhost:3001/verification/${email}`;
      await sendVerificationEmail(email, verificationLink, verificationCode);
      console.log("Verification email sent successfully!"); // Add this log
      res.status(201).json({ success: true, message: 'User created successfully', user: newUser });


    // Send SMS with verification code using Twilio:  uncomment laterrr!!!!
//      const accountSid = process.env.TWILIO_ACCOUNT_SID;
//      const authToken = process.env.TWILIO_AUTH_TOKEN;
  
//      const client = require('twilio')(accountSid, authToken);
//      console.log(client); // Output the twilioClient object to check if it's initialized correctly

//      const message = await client.messages.create({
//   body: `Your TektAI verification code: ${verificationCode}`,
//   from: process.env.PHONE_NUMBER,
//     to: `+${phone_number}` // Add '+' before phone_number

// }).then((message) => {
//   console.log("Verification SMS sent successfully!", message.sid);
// }).catch((error) => {
//   console.error("Error sending verification SMS:", error);
// });
    }
  } catch (error) {
    console.log("Error creating user:", error); // Add this log
    res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
};





function generateVerificationCode() {
  return Math.floor( 1000+ Math.random() * 10000).toString();
}

async function sendVerificationEmail(email, verificationLink, verificationCode) {
  var smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    transportMethod: "SMTP",
    secureConnection: false,
    port: 465,
    secure: true,
    auth: {
      user: "tektaitheoriginals@gmail.com",
      pass: "cvxv sflh anot dark",
    },
    tls: {
      rejectUnauthorized: false
    },
  });

  var mailOptions = {
    from: 'tektaitheoriginals@gmail.com',
    to: email,
    subject: "Email Verification",
    html: `
           <p>Click <a href="${verificationLink}">here</a> to verify your email.</p>
           <p>Your verification code: ${verificationCode}</p>
           `

  };

  await smtpTransport.sendMail(mailOptions);
};

exports.verifymail = async (req, res) => {
  try {
    const { email } = req.body; // Extract email from request body
    const { code } = req.body; // Extract code from request body

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({ success: false, message: 'Invalid verification code' });
    }

    user.verified = true;
    await user.save();

    res.status(200).json({ success: true, message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to verify email', error: error.message });
  }
};




exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
  };

  exports.authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const isPasswordValid = await user.isValidPassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        let accessToken = createAccessToken({ id: newUser._id });
        // verifyRecaptcha(req, res, () => {
        //   if (!req.recaptcha.error) {
        //     res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
        //   } else {
        //     res.status(400).json({ message: 'reCAPTCHA verification failed' });
        //   }
        // });
        res.status(200).json({ message: 'Login successful', user,accessToken });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
exports.googleLogin = async (req, res) => {
  try {
    const { email, given_name, family_name ,picture } = req.body;
    

    const existingUser = await User.findOne({ email });
    if (existingUser) { 
      existingUser.firstname = given_name;
      existingUser.lastname = family_name;
      existingUser.picture = picture;
     
      await existingUser.save();
      let accessToken = create({ id: existingUser._id });
      return res.json({ message: 'User logged in successfully', user: existingUser,accessToken });
    }
   

    const newUser = new User({
      email,
      firstname: given_name,
      lastname: family_name,
      picture : picture
    });
   
    await newUser.save();
    let accessToken = createAccessToken({ id: newUser._id });
    res.json({ message: 'User created and logged in successfully', user: newUser,accessToken });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: 'Failed to log in with Google', error: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const currentUser = req.user;
    let findUser=await User.findById(req.user.id)
    
    res.json({result:findUser});
  } catch (error) {
   
    res.status(500).json({ message: 'Failed to fetch current user', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { firstname, lastname, profession, phone_number,recoveryEmail, country,cv,githubLink,linkedInLink,instagramLink,aboutMe,facebookLink,accountPrivacy,emailNotif,pushNotif } = req.body;
    let pictureData = null;
    let pictureContentType = null;

    const picture = await addImage(req);
    if (picture) {
      pictureData = picture.data;
      pictureContentType = picture.contentType;
    }

    let findUser = await User.findById(req.user.id);

    await User.findByIdAndUpdate({ _id: findUser._id }, {
      firstname,
      lastname,
      profession,
      phone_number,
      recoveryEmail,
      country,
      cv,githubLink,
      linkedInLink,
      instagramLink,
      aboutMe,
      facebookLink,
      accountPrivacy,
      emailNotif,
      pushNotif,
      picture: pictureData ? { data: pictureData, contentType: pictureContentType } : null,
     
    });

    res.json({ success: true, message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
};


let createAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};
