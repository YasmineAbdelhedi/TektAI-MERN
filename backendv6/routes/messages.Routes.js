const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/messages
// @desc    Create a new message
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { text, senderId } = req.body;

        const newMessage = new Message({ text, senderId });
        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
