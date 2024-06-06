const express = require('express');
const router = express.Router();
const ChallengeCtrl = require('../controllers/ChallengeCtrl');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const authMiddleware= require('../middleware/authMiddleware');

router.get('/search/:companyName', ChallengeCtrl.searchChallengeByCompanyName);
router.post('/create', ChallengeCtrl.createChallenge);
router.get('/searchchallenge/:challengeName', ChallengeCtrl.searchChallengeByName);
router.get('/getById/:id', ChallengeCtrl.getChallengeById);
router.get('/get', ChallengeCtrl.getAllChallenges);
router.put('/update/:id', ChallengeCtrl.updateChallenge);
router.delete('/delete/:id', ChallengeCtrl.deleteChallenge);

//  favorites
router.post('/add-to-favorites', authMiddleware, ChallengeCtrl.addToFavorites);

router.post('/remove-from-favorites', authMiddleware, ChallengeCtrl.removeFromFavorites);

router.get('/user-favorites', authMiddleware, ChallengeCtrl.getUserFavorites);
module.exports = router;
