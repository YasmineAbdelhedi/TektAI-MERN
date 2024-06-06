const express = require('express');
const router = express.Router();
const solutionController = require('../controllers/SolutionCtrl');
const multer = require("multer");

const storage = multer.memoryStorage();

const uploadFields = multer({ storage: storage }).fields([
    { name: 'dataset' },
    { name: 'readMeFile' },
    { name: 'rapport' },
    { name: 'demo' },
    { name: 'sourceCode' },
]);
router.post('/addSolution',uploadFields,solutionController.addSolution);
router.get('/evaluate/:challengeId', async (req, res) => {
    const { challengeId } = req.params;
    try {
      await solutionController.evaluerSolutions(challengeId);
      res.status(200).json({ message: 'Évaluation des solutions terminée' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'évaluation des solutions', error: error.message });
    }
  });
  router.get('/getBYChallengeId/:challengeId', async (req, res) => {
    try {
      const { challengeId } = req.params;
      const solutions = await solutionController.getSolutionsByChallengeId(challengeId);
      res.status(200).json(solutions);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des solutions', error: error.message });
    }
  });
module.exports = router;
