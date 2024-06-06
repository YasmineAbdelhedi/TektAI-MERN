
// const jwt = require('jsonwebtoken');
// const User = require('../models/UserModel');




// const authMiddleware = async (req, res, next) => {
 
//     try {
//       let token = req.header("Authorization");
//       if (!token)
//         return res.status(400).json({ msg: "Invalid Authentication" });

//       jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//         if (err) return res.status(400).json({ msg: "Invalid Authentication" });

//         req.user = user;
//         next();
//       });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }




//   };
  
// module.exports = authMiddleware;
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    
  
    const rememberMeId = req.cookies.rememberMe;
    
    if (rememberMeId) {
      const user = await User.findById(rememberMeId);
      
      if (user) {
        // Generate token for the user
        token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
      }
    }

    if (!token) {
      return res.status(400).json({ msg: "Invalid Authentication" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid Authentication" });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authMiddleware;
