const express = require('express');
const router = express.Router();
const validateContactUs = require('../middleware/validateContactUs');
const Contact = require('../models/ContactUsModel'); 



router.post('/contactUs',validateContactUs, async (req, res) => {
    try {
      const {name,email,phone,subject,message} = req.body;
      const newUserMsg = new Contact({ name,email,phone,subject,message});
      await newUserMsg.save();
      res.status(201).json({success: true, message: 'message submitted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit message ', error: error.message });
    }
  });
  module.exports = router;
