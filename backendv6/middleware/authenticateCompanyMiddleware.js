
const jwt = require('jsonwebtoken');
const Company = require('../models/CompanyModel');




const authenticateCompanyMiddleware = async (req, res, next) => {
 
    try {
      let token = req.header("Authorization");
      if (!token)
        return res.status(400).json({ msg: "Invalid Authentication" });

      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, company) => {
        if (err) return res.status(400).json({ msg: "Invalid Authentication" });

        req.company = company;
        next();
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }




  };
  
module.exports = authenticateCompanyMiddleware;
