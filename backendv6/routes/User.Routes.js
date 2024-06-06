const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const userController = require('../controllers/UserCtrl');
const passport = require("passport");
const bcrypt = require("bcryptjs");
const authMiddleware = require('../middleware/authMiddleware');
let jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const validate = require('../middleware/validate');
const validateUpdate=require('../middleware/validateUpdate');
const originLogo = '../uploads/originlogo.svg';
const multer = require("multer");

const Company = require('../models/CompanyModel');
const storage = multer.memoryStorage();

const uploadPicture = multer({ storage: storage }).single('picture');


let createAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
}

let createAccessToken2 = (user) => {
  return jwt.sign({id:user?._id,email:user?.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
}
router.post('/change-password', authMiddleware, async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // if (!(await user.isValidPassword(currentPassword))) {
    //   return res.status(400).json({ error: 'Mot de passe actuel incorrect' });
    // }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Les nouveaux mots de passe ne correspondent pas' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Mot de passe mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du mot de passe' });
  }
});

router.get('/search/:name', userController.searchUserByName);

router.post('/verify-email', userController.verifymail);




  
router.delete('/delete/:id', userController.deleteUser);
const addImage = async (req) => {
  if (!req.file) {
    throw new Error('No file uploaded');
  }

  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype
  };
};


router.put('/update-image', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.user;
    let picture = null;
    if (req.file) {
      picture = await addImage(req);
    }


    await User.findByIdAndUpdate(userId, {
      picture: picture ? { data: picture.data, contentType: picture.contentType } : null,
    });

    res.status(200).json({ message: 'User picture updated successfully' });
  } catch (error) {
    console.error('Error updating user picture:', error);
    res.status(500).json({ message: 'Failed to update user picture', error: error.message });
  }
});

router.get('/currentUserProfile', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let userProfile = null;

    if (user.isCompany) {
      const company = await Company.findById(user.isCompany);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      userProfile = company;
    } else {
      // If the user is not associated with a company, return the user profile
      userProfile = user;
    }

    res.status(200).json({ userProfile });
  } catch (error) {
    console.error('Error fetching current user profile:', error);
    res.status(500).json({ message: 'Failed to fetch current user profile', error: error.message });
  }
});
router.get('/current', authMiddleware, userController.getCurrentUser);




router.put('/update',uploadPicture, authMiddleware, async (req, res) => {
  try {
    const { firstname, lastname, profession, phone_number,recoveryEmail, country,cv,githubLink,linkedInLink,instagramLink,aboutMe,facebookLink,accountPrivacy,emailNotif,pushNotif } = req.body;
    
    let picture = null;
    if (req.file) {
      picture = await addImage(req);
    }

    await userController.updateUser(req, res, {
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
      picture: picture ? { data: picture.data, contentType: picture.contentType } : null,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
});



router.get('/find-by-email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User found', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to find user by email', error: error.message });
  }
});

router.post('/register',userController.createUser);

router.get('/', userController.getAllUsers);






router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user || !user.isValidPassword(password)) {
        throw new Error('Invalid email or password');
      }
      let accessToken = createAccessToken({ id: user._id });
      res.status(200).json({ message: 'Login successful', user,accessToken, userType: user.type  });
    } catch (error) {
      res.status(401).json({ message: 'Login failed', error: error.message });
    }
  });
  
router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
      
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});



router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

router.post("/login/success", async (req, res) => {
  try {
    const { email, given_name, family_name,picture ,profession } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.firstname = given_name;
      existingUser.lastname = family_name;
     
      await existingUser.save();
      let accessToken = createAccessToken({ id: existingUser._id });
      return res.json({ message: 'User logged in successfully', user: existingUser,accessToken, userType: existingUser.type  });
    }

    const newUser = new User({
      email,
      firstname: given_name,
      lastname: family_name,
      picture,
      profession,
    });
    await newUser.save();
    let accessToken = createAccessToken({ id: newUser._id });
    res.json({ message: 'User created and logged in successfully', user: newUser,accessToken, userType: newUser.type  });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: 'Failed to log in with Google', error: error.message });
  }
});
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/auth/facebook/error',
  }),
  function (req, res) {
    res.redirect('/auth/facebook/success');
  }
);
router.post('/facebook/login', async (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      // Ici, vous pouvez effectuer des vérifications supplémentaires si nécessaire

      // Si tout est correct, vous pouvez envoyer une réponse réussie
      res.status(200).json({ message: 'Successfully logged in with Facebook' });
    } else {
      // Si les données fournies ne sont pas valides, envoyez une réponse d'erreur
      res.status(400).json({ message: 'Invalid access token ' });
    }
  } catch (error) {
    console.error('Error while logging in with Facebook:', error.message);
    res.status(500).json({ message: 'Failed to login with Facebook', error: error.message });
  }
});

router.get('/facebook/success', async (req, res) => {
  const userInfo = {
    id: req.user.id,
    displayName: req.user.displayName,
    provider: req.user.provider,
  };
  res.json({ message: 'Successfully logged in via Facebook', user: userInfo });
});

router.get('/facebook/error', (req, res) => res.send('Error logging in via Facebook..'));

router.get('/signout', (req, res) => {
  try {
    req.session.destroy(function (err) {
      console.log('session destroyed.');
    });
    res.render('auth');
  } catch (err) {
    res.status(400).send({ message: 'Failed to sign out fb user' });
  }
});

router.post('/github/login', async (req, res) => {
  try {
    const { code } = req.body.response;
    const { data } = await axios.post('https://github.com/login/oauth/authorize?client_id='+ process.env.GITHUB_CLIENT_ID, {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET_KEY,
      code,
    });
    let accessToken = createAccessToken({ id: data._id });
    const githubUserData = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const token = jwt.sign({ id: githubUserData.data.id }, process.env.GITHUB_SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Connexion réussie avec GitHub', token });
  } catch (error) {
    console.error('Erreur lors de la connexion avec GitHub :', error);
    res.status(500).json({ message: 'Échec de la connexion avec GitHub', error: error.message });
  }
});
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get(
  '/callback',
  passport.authenticate('github', { failureRedirect: '/auth/github/error' }),
  function (req, res) {
    res.redirect('/auth/github/success');
  }
);

router.get('/success', async (req, res) => {
  const userInfo = {
    id: req.session.passport.user.id,
    displayName: req.session.passport.user.username,
    provider: req.session.passport.user.provider,
  };
  res.render('fb-github-success', { user: userInfo });
});

router.get('/error', (req, res) => res.send('Error logging in via Github..'));

router.get('/signout', (req, res) => {
  try {
    req.session.destroy(function (err) {
      console.log('session destroyed.');
    });
    res.render('auth');
  } catch (err) {
    res.status(400).send({ message: 'Failed to sign out fb user' });
  }
});
router.post("/forgot-password", async (req, res) => {
  let { email } = req.body;
  try {
   
    const oldUser =  await User.findOne({ email });
    if (!oldUser) {
      return res.status(302).json({ msg: "User Not Exists!!" });}
      else{
        const secret = process.env.JWT_SECRET_KEY + oldUser.password;
      let token = createAccessToken2({ id: oldUser._id });

    console.log(token)
;
        return  res.send({oldUser,token})
      }


} catch (error) { 
  return res.status(500).json({msg:error.message})
}
});
router.post('/sendmail',async(req,res)=>{
  try {
    const { id, token,email } = req.body;
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
        // do not fail on invalid 
        rejectUnauthorized: false
      },
});  


var mailOptions = {
  from: 'tektaitheoriginals@gmail.com',
  to: email,
  subject: "reset mdp",
  html: `<p>Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
  <a href="http://localhost:3001/reset-password/${id}/${token}"
   class="btn btn-primary" style="display:inline-block;background-color:#007bff;
   color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px;"
   >Réinitialiser le mot de passe</a>
   <br />  <br />  <br />  <br />  <br />
   <img src="https://www.dropbox.com/s/okntir3yovac85uc2y6k0/originlogo.svg?dl=1" alt="logo" />
   `,

};

smtpTransport.sendMail(mailOptions, (error, info) => {
  if (error) {
      return res.send("Error while sending mail: " + error);
  } else {
    return  res.send('Message sent: %s', info.messageId);
  }
 
}); 

  } catch (error) {
    return res.status(500).json({msg:error.message})
    
  }
})

router.get("/reset-password/:id", async (req, res) => {
      const { id } = req.params;
      console.log(req.params);
      const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT_SECRET_KEY + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: oldUser.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
    });



router.post("/reset-password/:id/:token", async (req, res) => {
      const { id, token } = req.params;
      const { password } = req.body;
    
      try {
        const oldUser = await User.findById({ _id: id });
        if (!oldUser) {
          return res.json({ status: "User Not Exists!!" });
        }
    
        // Vérifier si le nouveau mot de passe est différent de l'ancien mot de passe
        const isSamePassword = await bcrypt.compare(password, oldUser.password);
        if (isSamePassword) {
          return res.status(400).json({ status: "New password must be different from the old password" });
        }
    
        // Mettre à jour le mot de passe
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              password: encryptedPassword,
            },
          }
        );
    
        res.send({ result: "update" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Something Went Wrong" });
      }
    });


    
router.post("/verifyOTP", async (req, res) => {
      try {
        let { userId, otp } = req.body;
    
        console.log('Received verification request:', { userId, otp });
    
        if (!userId || !otp) {
        console.error('Empty OTP details are not allowed');
        return res.status(400).json({ status: "FAILED", message: "Empty OTP details are not allowed" });
        }
    
        const userOTPVerificationRecords = await UserOTPVerification.find({
        userId,
        });
    
    
    
        console.log('User OTP Verification Records:', userOTPVerificationRecords);
    
        if (userOTPVerificationRecords.length <= 0) {
        console.error("Account record doesn't exist or has been verified already");
        return res.status(400).json({ status: "FAILED", message: "Account record doesn't exist or has been verified already" });
        }
    
        const { expiresAt } = userOTPVerificationRecords[0];
        const hashedOTP = userOTPVerificationRecords[0].otp;
    
        console.log('Expires At:', expiresAt);
        console.log('Hashed OTP:', hashedOTP);
    
        if (expiresAt < Date.now()) {
        console.error('Code has expired. Please request again');
        await UserOTPVerification.deleteMany({ userId });
        return res.status(400).json({ status: "FAILED", message: "Code has expired. Please request again" });
        }
    
        const validOTP = await bcrypt.compare(otp, hashedOTP);
    
        console.log('Valid OTP:', validOTP);
    
        if (!validOTP) {
        console.error('Invalid code passed. Check your inbox.');
        return res.status(400).json({ status: "FAILED", message: "Invalid code passed. Check your inbox." });
        }
    
        await User.updateOne({ _id: userId }, { verified: true });
        await UserOTPVerification.deleteMany({ userId });
    
        console.log('User email verified successfully');
        return res.json({ status: "VERIFIED", message: "User email verified successfully" });
    
      } catch (error) {
        console.error('Verification error:', error);
        return res.status(500).json({ status: "FAILED", message: "Internal Server Error" });
      }
      });


      
module.exports = router;
