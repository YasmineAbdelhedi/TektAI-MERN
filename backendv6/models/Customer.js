const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  paymentMethodId: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
