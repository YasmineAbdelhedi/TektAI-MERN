import React, { useState, useRef } from 'react';
import Layout from "../layouts/Layout";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Codeverif = () => {
    const [otp, setOtp] = useState('');
    const [focusIndex, setFocusIndex] = useState(0);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const { email } = useParams();

 

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        setOtp((prevOtp) => {
            let newOtp = prevOtp.slice(0, index) + value + prevOtp.slice(index + 1);
            if (value !== '') {
                setFocusIndex((prevIndex) => Math.min(prevIndex + 1, 3));
            } else {
                setFocusIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            }
            return newOtp;
        });
        if (value === '') {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        } else if (index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            console.log('Submitting verification code:', otp);
            console.log('Submitting email:', email);
        
            const response = await axios.post(`http://localhost:3000/api/user/verify-email`, {
                email: email,
                code: otp.toString() // Convert otp to string before submission
            });
        
            console.log('Response:', response.data); // Log the response data
            
            // Assuming the response contains a property named "success" indicating the verification status
            if (response.data.success) {
                // Show success toast
                toast.success('Email verified successfully!');
            } else {
                // Show error toast for invalid code
                toast.error('Invalid verification code.');
            }
        } catch (error) {
            console.error('Error verifying email:', error);
            toast.error('An error occurred while verifying email.');
        }
    };
    

    return (
        <Layout header={1} footer={1}>
            <section className="banner-area-three jarallax " >
                



                <div className="row justify-content-center mt-7">
      <div className="col-lg-4 text-center">
      <div>
        <video src="img/images/verif.mp4" style={{width:"500px"}}  autoPlay muted loop></video>
      </div>
        <div className="card mt-5 mb-120 ">
          <div className="card-body py-5 px-lg-5">
            <div className="svg-icon svg-icon-xl text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-g</title>
                <path
                  d="M336,208V113a80,80,0,0,0-160,0v95"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                ></path>
                <rect
                  x="96"
                  y="208"
                  width="320"
                  height="272"
                  rx="48"
                  ry="48"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                ></rect>
              </svg>
            </div>
            <h3 className="fw-normal text-dark mt-4">2-step verification</h3>
            <p className="mt-4 mb-1">
              We sent a verification code to your email.
            </p>
            <p>Please enter the code in the field below.</p>

            <div className="row mt-4 pt-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg text-center py-4"
                  maxLength="1"
                  autoFocus=""
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg text-center py-4"
                  maxLength="1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg text-center py-4"
                  maxLength="1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg text-center py-4"
                  maxLength="1"
                />
              </div>
            </div>

            <a
              href="#!"
              className="btn btn-purple btn-lg w-100 hover-lift-light mt-4"
            >
              Verify my account
            </a>
            <p className="text-center text-muted mt-4">
          Didn't receive it?{" "}
          <a href="#!" className="text-decoration-none ms-2">
            Resend code
          </a>
        </p>
          </div>
        </div>
      

       
      </div>
    </div>
    <style>
        {
            `
            body{
                background:#f6f9fc;
                }
                .icon-circle[class*=text-] [fill]:not([fill=none]), .icon-circle[class*=text-] svg:not([fill=none]), .svg-icon[class*=text-] [fill]:not([fill=none]), .svg-icon[class*=text-] svg:not([fill=none]) {
                    fill: currentColor!important;
                }
                .svg-icon-xl>svg {
                    width: 3.25rem;
                    height: 3.25rem;
                }
                
                .hover-lift-light {
                    transition: box-shadow .25s ease,transform .25s ease,color .25s ease,background-color .15s ease-in;
                }
                .mt-4 {
                    margin-top: 1.5rem!important;
                }
                .w-100 {
                    width: 100%!important;
                }
                .btn-group-lg>.btn, .btn-lg {
                    padding: 0.8rem 1.85rem;
                    font-size: 1.1rem;
                    border-radius: 0.3rem;
                }
                .btn-purple {
                    color: #fff;
                    background-color: blue;
                    border-color: #6672e8;
                }
                
                .text-center {
                    text-align: center!important;
                }
                .py-4 {
                    padding-top: 1.5rem!important;
                    padding-bottom: 1.5rem!important;
                }
                .form-control-lg {
                    min-height: calc(1.5em + 1rem + 2px);
                    padding: 0.5rem 1rem;
                    font-size: 1.25rem;
                    border-radius: 0.3rem;
                }
                .form-control {
                    display: block;
                    width: 100%;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #1e2e50;
                    background-color: #f6f9fc;
                    background-clip: padding-box;
                    border: 1px solid #dee2e6;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 0.25rem;
                    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                }
                
            `
        }
    </style>
            </section>
        </Layout>
    );
};

export default Codeverif;
