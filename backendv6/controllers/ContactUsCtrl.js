const Contact = require('../models/ContactUsModel'); 

exports.contactUs = async (req, res) => {
    try {
      const { name, email,phone, subject, message } = req.body;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      const newUserMsg = new Contact({ name, email,phone, subject, message }); 
      await newUserMsg.save();
      verifyRecaptcha(req, res, () => {
        if (!req.recaptcha.error) {
          res.status(201).json({ success: true, message: 'message submitted successfully'});
        } else {
          res.status(400).json({ message: 'reCAPTCHA verification failed' });
        }
      });
      res.status(201).json({success: true, message: 'message submitted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit message ', error: error.message });
    }
  };
