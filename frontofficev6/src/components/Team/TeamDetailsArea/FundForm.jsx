import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { gsapTitleAnimation } from '../../../lib/gsap-lib/gsapTitleAnimation';
import Layout from '../../../layouts/Layout';
import StripeComponent from '../../Stripe/StripeComponent';



const FundForm = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout
        header={1} footer={1}
      >
        
          <StripeComponent />
      </Layout>
    </>
  );
};
  
export default FundForm;
