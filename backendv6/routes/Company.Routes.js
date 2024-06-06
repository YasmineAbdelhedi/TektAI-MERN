const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyCtrl');
const User = require('../models/CompanyModel')
const authenticateCompanyMiddleware = require('../middleware/authenticateCompanyMiddleware');

let jwt = require("jsonwebtoken");



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

  


router.get('/search/:companyName', CompanyController.searchCompanyByName);

router.post('/create', CompanyController.createCompany);
router.get('/all', CompanyController.getAllcompanies);
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

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

router.get('/current', authenticateCompanyMiddleware, CompanyController.getCurrentCompany);
router.put('/update', authenticateCompanyMiddleware, CompanyController.updateCompany);

module.exports = router;
