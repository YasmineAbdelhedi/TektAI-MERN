
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initiatePayment } from './customerService';
import { loadStripe } from '@stripe/stripe-js'; 
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
const Payment = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);
  const apiURL = 'http://localhost:3000/api/stripe';

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');
  const prizeAmount = Number(searchParams.get('prizeAmount'));

  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const handlePayment = async () => {
      try {
        const response = await initiatePayment(customerId, prizeAmount);
        setPaymentStatus(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (customerId && prizeAmount) {
      handlePayment();
    }
  }, [customerId, prizeAmount]);

  const makePayment = async () => {
    try {
      const stripe = await loadStripe("pk_test_51P9W2TJY1ZtideJdzRpA4DGOCP12agTUZ18S9buUmToO9abiEjdKvRDgI1PFnRmPxzlzJJPTWRSqvUBopbRDcIVZ00csp53igu");
      const body = {
        products: { prizeAmount: prizeAmount },
        success_url: 'http://localhost:3001/success', // Replace with your success URL
      };
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
    
      if (!response.ok) {
        throw new Error(`Failed to create checkout session: ${response.statusText}`);
      }
      
      const session = await response.json();
      // Redirect to the checkout page using the session ID
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      // Handle error - show a message to the user or retry the payment
    }
  };
  
  return (
    <>
<Layout header={1} footer={1}>
  <div style={{ position: 'relative', height: '100vh' }}>
    <video className="background-video" src="/img/images/payment.mp4" autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    <button className='btn btn-success' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-95%, -50%)', zIndex: '1000',width:'500px' }} onClick={makePayment}>Make Payment</button>
  </div>
</Layout>

        </>
  );
};

export default Payment;
