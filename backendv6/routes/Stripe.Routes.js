const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripeController');

router.post('/createcustomer', stripeController.createCustomer);
router.post('/makepayment', stripeController.makePayment);

module.exports = router;
