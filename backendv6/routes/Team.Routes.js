const express = require('express');
const router = express.Router();
const TeamCtrl = require('../controllers/TeamCtrl');
const authMiddleware =require('../middleware/authMiddleware');
const multer = require("multer");

const storage = multer.memoryStorage();

const uploadPicture = multer({ storage: storage }).single('picture');

router.get('/teams', TeamCtrl.getAllTeams);

router.post('/create', authMiddleware, TeamCtrl.createTeam);

router.put('/:Id/members', TeamCtrl.updateTeamMembers);

router.delete('/:Id', TeamCtrl.deleteTeam);


router.get('/:teamId', TeamCtrl.getTeamById);

router.post('/:teamId/add-member', TeamCtrl.addMemberToTeam);

module.exports = router;