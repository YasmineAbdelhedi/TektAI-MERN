const Solution = require('../models/SolutionModel');
const multer = require('multer');
const Challenge = require('../models/ChallengeModel')














const addFile = async (req, fieldname) => {
  if (!req.files[fieldname] || req.files[fieldname].length === 0) {
    return null;
  }
  const file = req.files[fieldname][0];
  const base64File = file.buffer.toString('base64');
  return {
    data: base64File,
    contentType: file.mimetype
  };
};

exports.evaluerSolutions = async (challengeId) => {
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      throw new Error('Challenge non trouvé');
    }

    const solutions = await Solution.find({ challengeId });

    // Filtrer les solutions correctes
    const solutionsCorrectes = solutions.filter(solution => solution.output >= challenge.bareme);

    // Trier les solutions correctes par taille de fichier de code source
    solutionsCorrectes.sort((a, b) => {
      const sizeA = a.sourceCode.data.length;
      const sizeB = b.sourceCode.data.length;
      return sizeA - sizeB;
    });

    if (solutionsCorrectes.length > 0) {
      const solutionOptimale = solutionsCorrectes[0];
      console.log(`Solution optimale: ${solutionOptimale._id}`);
      solutionsCorrectes.shift();
      solutionsCorrectes.forEach(solution => {
        console.log(`Solution correcte mais non optimale: ${solution._id}`);
      });
    } else {
      console.log("Aucune solution correcte trouvée pour ce challenge.");
    }

    const solutionsIncorrectes = solutions.filter(solution => solution.output < challenge.bareme);
    solutionsIncorrectes.forEach(solution => {
      console.log(`Solution incorrecte: ${solution._id}`);
    });
  } catch (error) {
    console.error('Erreur lors de l\'évaluation des solutions:', error);
  }
};




exports.addSolution = async (req, res) => {
  try {
    const { challengeId, output } = req.body;
    let datasetData = null;
    let readMeFileData = null;
    let rapportData = null;
    let demoData = null;
    let sourceCodeData = null;

    datasetData = await addFile(req, 'dataset');
    readMeFileData = await addFile(req, 'readMeFile');
    rapportData = await addFile(req, 'rapport');
    demoData = await addFile(req, 'demo');
    sourceCodeData = await addFile(req, 'sourceCode');

    const solution = new Solution({
      challengeId,
      output,
      dataset: datasetData? { data: datasetData.data, contentType: datasetData.contentType } : null,
      readMeFile: readMeFileData? { data: readMeFileData.data, contentType: readMeFileData.contentType } : null,
      rapport: rapportData? { data: rapportData.data, contentType: rapportData.contentType } : null,
      demo: demoData? { data: demoData.data, contentType: demoData.contentType } : null,
      sourceCode: sourceCodeData? { data: sourceCodeData.data, contentType: sourceCodeData.contentType } : null,
    });
    await solution.save();
    res.status(201).json({ message: 'Solution added successfully', solution });
  } catch (error) {
    res.status(500).json({ message: 'Error adding solution', error: error.message });
  }
};


exports.getSolutionsByChallengeId = async (challengeId) => {
  try {
    const solutions = await Solution.find({ challengeId });
    return solutions;
  } catch (error) {
    console.error('Erreur lors de la récupération des solutions par ID de défi :', error);
    throw error;
  }
};

