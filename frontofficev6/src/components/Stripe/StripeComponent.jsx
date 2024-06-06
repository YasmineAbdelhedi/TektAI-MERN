import React, { useState } from 'react';
import axios from 'axios';
import CustomerCreate from './CustomerCreate';
import Payment from './Payment';

const StripeComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('');
  const [amount, setAmount] = useState('');
  const [customerId, setCustomerId] = useState(null); // Add this line


  const createCustomer = async () => {
    try {
      const response = await axios.post('/api/stripe/createcustomer', {
        name,
        email,
        paymentMethodId,
      });
      console.log(response.data);
      setCustomerId(response.data.customerId); // Set customerId after successful creation

    } catch (error) {
      console.error(error);
    }
  };

  const makePayment = async () => {
    try {
      const response = await axios.post('/api/stripe/makepayment', {
        customerId ,
        amount,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <section className="team-details-area pt-130 pb-100">
    <div className="container">
     
       
       
    <CustomerCreate/>
    {customerId && <Payment customerId={customerId} />} 

</div>

</section>

  );
};

export default StripeComponent;
