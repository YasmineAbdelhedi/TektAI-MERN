const express = require('express');
const router = express.Router();
const questionValidation = require('../middleware/questionValidation');
const Question = require('../models/questionModel'); 


router.post('/askUs',questionValidation, async (req, res) => {
    try {
      const {question } = req.body;     
      const newQuestion = new Question({ question }); 
      await newQuestion.save();
      res.status(201).json({success: true, message: 'question submitted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit question ', error: error.message });
    }
  });
  module.exports = router;