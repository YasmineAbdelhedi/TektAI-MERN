const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const Notification = require('../models/notification');


router.post('/notifications', notificationController.createNotification);

router.post('/:teamId/join', notificationController.joinTeam);
// Example backend implementation using Express.js
router.get("/:userId", async (req, res) => {
    try {
      const notifications = await Notification.find({ receiver: req.params.userId });
      res.json(notifications);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
// Define other routes for retrieving, updating, and deleting notifications

module.exports = router;
