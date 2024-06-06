const express = require('express');
const router = express.Router();

const globalSearchController = require('../controllers/globalSearchController');


router.get('/search', globalSearchController.globalSearch);
module.exports = router;