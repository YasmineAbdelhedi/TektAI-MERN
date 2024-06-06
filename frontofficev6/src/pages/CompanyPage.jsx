"use client"
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import Recaptcha from 'react-google-recaptcha';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from "react-router-dom";




const Company = () => {

    const [valid, setValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [formValid, setFormValid] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        website:'',
        domaine:'',
        password: '',
    retypePassword: '',
      });
      const minLengthValid = formData.password.length >= 8;
      const upperCaseValid = /[A-Z]/.test(formData.password);
      const lowerCaseValid = /[a-z]/.test(formData.password);
      const numberValid = /\d/.test(formData.password);
      const handleChange = (eOrValue) => {
        if (typeof eOrValue === 'object') {
          const e = eOrValue;
          setFormData({ ...formData, [e.target.name]: e.target.value });
        } else {
          setFormData({ ...formData});
    
        }
      };
    
    
      const onChangeRecaptcha = (recaptchaToken) => {
        console.log("reCAPTCHA value: ", recaptchaToken);
        setRecaptchaValue(recaptchaToken);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validateForm()) {
        //   console.error('Form validation failed.');
        //   return;
        // }  
        try {
          
          if (!formData.email || !formData.password) {
            console.error('Email and password are required');
            return;
          }
        // if (!recaptchaValue) {
        //   console.error('Please complete the reCAPTCHA');
        //   return;
        // }
          await axios.post('http://localhost:3000/api/company/create', {
            ...formData,
          });
          console.log("donnééééééééééééééé",formData)

          navigate('/companyHome');
          console.log('company registred successfully!!');
        } catch (error) {
          console.error('Failed to register company :', error.message);
        }
      };
    
      
    
    
      const validateForm = () => {
        const NameValid = formData.companyName.length >= 3 && /^[a-zA-Z]+$/.test(formData.companyName) && !/\d/.test(formData.companyName) && !/[!@#$%^&*(),.?":{}|<>\/]/.test(formData.companyName);
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordValid = minLengthValid && upperCaseValid && lowerCaseValid && numberValid;
        const isValid =
        NameValid &&
        passwordValid &&
        formData.password === formData.retypePassword &&
        emailPattern.test(formData.email) 
        
        setFormValid(isValid);
        
        if (!isValid) {
        return false;
        }
        
       if (!NameValid) {
      console.error(' companyName must be at least 3 characters long, contain only letters, and not contain numbers or special characters.');
      return false;
    }
    
   
    if (!emailPattern.test(formData.email)) {
      console.error('Please enter a valid email address.');
      return false;
    }
      return true;
    };
    const handleEmailValidation = () => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setEmailValid(emailPattern.test(formData.email));
    };
  
    return (
<section className="vh-100" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                          <input type="text" required id="companyName" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} onBlur={handleChange} placeholder='enter company name' />
             {formData.companyName !== '' && (
  <p>
    {formData.companyName.length < 3 && 'companyName must be at least 3 characters long.'}
    {!!formData.companyName.length && !/^[a-zA-Z]+$/.test(formData.companyName) && <><br />companyName must contain only letters.</>}
    {!!formData.companyName.length && /\d/.test(formData.companyName) && <><br />companyName cannot contain numbers.</>}
    {!!formData.companyName.length && /[!@#$%^&*(),.?":{}|<>\/]/.test(formData.companyName) && <><br />companyName cannot contain special characters.</>}
  </p>
  )}                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                       
                        <input placeholder='enter email' type="email" name='email'value={formData.email} onChange={handleChange} onBlur={handleEmailValidation} className="form-control"  />
             {!emailValid && (
              <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>Please enter a valid email address.</p>
            )}                      
    
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text" id="domaine" name='domaine' class="form-control" placeholder='domaine' onChange={handleChange} value={formData.domaine} />
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text" id="website" name='website' class="form-control" placeholder='website' onChange={handleChange}  value={formData.website}/>
                    </div>
                  </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <input
  className="form-control"
  type={!showPassword ? 'password' : 'text'} 
  name='password' 
  required 
  value={formData.password}
  onChange={handleChange} 
  placeholder="Enter password"   
  style={{
    backgroundColor:'white',
    borderStyle: 'groove',
    borderColor :'#56ACFF',
    borderWidth:'1px',
    paddingRight: '2.5rem'
  }}
/>
{formData.password !== '' && !minLengthValid && <p>Password should be at least 8 characters long.</p>}
{formData.password !== '' && !upperCaseValid && <p>Password should contain at least one uppercase letter.</p>}
{formData.password !== '' && !lowerCaseValid && <p>Password should contain at least one lowercase letter.</p>}
{formData.password !== '' && !numberValid && <p>Password should contain at least one number.</p>} 
{showPassword ? (
  <i className="fas fa-eye" style={{ position: 'absolute', left: '22rem', top: '52%', transform: 'translateY(-70%)', cursor: 'pointer' }} onClick={() => setShowPassword(false)}></i>
) : (
  <i className="fas fa-eye-slash" style={{ position: 'absolute', left: '22rem', top: '52%',  transform: 'translateY(-70%)', cursor: 'pointer' }} onClick={() => setShowPassword(true)}></i>
)}
                         
                        </div>
                      </div>
                      <PasswordStrengthBar password={formData.password} />

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                        <input  className="form-control"
    type={!showRetypePassword ? 'text' : 'password'} 
    name='retypePassword' 
    required 
    value={formData.retypePassword}
    onChange={handleChange} 
    placeholder="retype password" 
    style={{
      backgroundColor: 'white',
      borderStyle: 'groove',
      borderColor: '#56ACFF',
      borderWidth: '1px'
    }}
  />
  {formData.retypePassword !== '' && formData.password !== formData.retypePassword && (
    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>Passwords do not match</p>
  )}
  
  {showRetypePassword ? (
  <i className="fas fa-eye-slash" style={{ position: 'absolute', left: '22rem', top: '63%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setShowRetypePassword(false)}></i>
) : (
  <i className="fas fa-eye" style={{ position: 'absolute', left: '22rem', top: '63%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={() => setShowRetypePassword(true)}></i>
)}
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                        
                      </div>
                      {/* <Recaptcha
        sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
        onChange={onChangeRecaptcha}
      /> */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                      </div>
                      <p style={{ textAlign: 'center', fontSize:'15px' }}>already have an account?
  <Link to="/" className="">Sign in</Link>
</p>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 

    );
  };
  
  export default Company;
  