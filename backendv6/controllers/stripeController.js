const stripe = require('stripe')('sk_test_51OFQ8wFp81kledrMJR4WGeG11RWXCO5BmTzSXjyDWfRSgDC9eitBqJc4REYbekB9ufokrBdyp6fpBTz1NLACVFLW008ppA3yZz');
const Customer = require('../models/Customer');  // Import the Mongoose model

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, paymentMethodId } = req.body;

    const stripeCustomer = await stripe.customers.create({
      name,
      email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // Save customer to MongoDB
    const customer = new Customer({
      customerId: stripeCustomer.id,
      name,
      email,
      paymentMethodId,
    });

    await customer.save();

    res.json(stripeCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.makePayment = async (req, res) => {
    try {
      const { customerId, amount } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        customer: customerId,
      });
  
      res.json(paymentIntent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
