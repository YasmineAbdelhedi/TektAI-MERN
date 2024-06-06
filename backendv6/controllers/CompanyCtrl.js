const Company = require('../models/CompanyModel');

let jwt = require("jsonwebtoken");






exports.searchCompanyByName = async (req, res) => {
  try {
    const { companyName } = req.params;

    const regex = new RegExp(companyName, 'i');

    const companies = await Company.find({ companyName: regex });

    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search companies', error: error.message });
  }
};



const addImage = async (req) => {
  if (!req.file) {
    return null;
  }

  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype
  };
};


exports.createCompany = async (req, res) => {
  try {
    const { companyName,email,website,picture,domaine,aboutMe,facebookLink,instagramLink,linkedInLink,githubLink, password,retypePassword } = req.body;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const minLengthValid = password.length >= 8;
    const upperCaseValid = /[A-Z]/.test(password);
    const lowerCaseValid = /[a-z]/.test(password);
    const numberValid = /\d/.test(password);
    
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    const newCompany = new Company({ companyName,email,website,domaine,picture,aboutMe,facebookLink,instagramLink,linkedInLink,githubLink, password,retypePassword });
    await newCompany.save();
    // verifyRecaptcha(req, res, () => {
    //   if (!req.recaptcha.error) {
    //     res.status(201).json({ success: true, message: 'company created successfully', company: newCompany });
    //   } else {
    //     res.status(400).json({ message: 'reCAPTCHA verification failed' });
    //   }
    // });
    res.status(201).json({success: true, message: 'company created successfully', company: newCompany });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create company', error: error.message });
  }
};

exports.getAllcompanies = async (req, res) => {
    try {
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch companies', error: error.message });
    }
  };
exports.authenticateCompany = async (req, res) => {
    try {
        const { email, password } = req.body;
        const company = await Company.findOne({ email });
        
    if (!company || !(await company.isValidPassword(password))) {
      throw new Error('Invalid email or password');
    }
        let accessToken = createAccessToken({ id: company._id });
        verifyRecaptcha(req, res, () => {
          if (!req.recaptcha.error) {
            res.status(201).json({ success: true, message: 'company created successfully', company: company });
          } else {
            res.status(400).json({ message: 'reCAPTCHA verification failed' });
          }
        });
        res.status(200).json({ message: 'Login successful', company,accessToken });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.getCurrentCompany = async (req, res) => {
  try {
    const currentCompany= req.company;
    let findCompany=await Company.findById(req.company.id)
    
    res.json({result:findCompany});
  } catch (error) {
   
    res.status(500).json({ message: 'Failed to fetch current company', error: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { companyName,phone_number,country,website,domaine,aboutMe,facebookLink,instagramLink,linkedInLink,githubLink} = req.body;
    let pictureData = null;
    let pictureContentType = null;

    const picture = await addImage(req);
    if (picture) {
      pictureData = picture.data;
      pictureContentType = picture.contentType;
    }

    let findCompany = await Company.findById(req.company.id);

    await Company.findByIdAndUpdate({ _id: findCompany._id }, {
    companyName,
      phone_number,
      country,
      website,
      domaine,
      picture: pictureData ? { data: pictureData, contentType: pictureContentType } : null,
      aboutMe,
      facebookLink,
      instagramLink,
      linkedInLink,
      githubLink,
    
    });

    res.json({ success: true, message: 'Company updated successfully' });
  } catch (error) {
    console.error('Error updating Company:', error);
    res.status(500).json({ message: 'Failed to update Company', error: error.message });
  }
};


let createAccessToken = (company) => {
  return jwt.sign(company, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};
