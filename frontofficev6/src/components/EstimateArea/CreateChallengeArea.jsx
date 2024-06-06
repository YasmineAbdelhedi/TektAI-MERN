import React, { useState } from "react";
import axios from "axios";
import Recaptcha from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import ChallengeInfoForm from "./ChallengeInfoForm";
import EvaluationMetricsForm from "./EvaluationMetricsForm";
import PrizeForm from "./PrizeForm";

const EstimateArea = () => {


  return (
    <section className="estimate-area pt-50 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="estimate-form">
               
                  <>
                   <ChallengeInfoForm/>
                  </>
             
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default EstimateArea;
