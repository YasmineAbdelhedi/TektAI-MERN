const Notification = require('../models/notification');

exports.createNotification = async (req, res) => {
  try {
    const { sender, receiver, team, message } = req.body;
    const notification = new Notification({ sender, receiver, team, message });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.joinTeam = async (req, res) => {
    try {
        // Create notification for team leader
        const notification = new Notification({
            sender: req.body.userData.userId, // Use the current user ID from the request body
            receiver: req.body.teamleader, // Assuming you have access to the team leader ID
            team: req.params.teamId,
            message: `User ${req.body.userData.firstname} wants to join your team ${req.body.teamname}.`
        });
        
        await notification.save();
        res.status(201).json({ message: 'Join request sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Implement other controller methods for retrieving, updating, and deleting notifications
