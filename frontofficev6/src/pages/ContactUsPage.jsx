"use client"
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Recaptcha from 'react-google-recaptcha'
const ContactUs = () => {

  const [PhoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [formValid, setFormValid] = useState(false);


    const [recaptchaValue, setRecaptchaValue] = useState(null);
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone :PhoneNumber,
      subject: '',
      message: '',


      
    });


    const handleChange = (eOrValue) => {
      if (typeof eOrValue === 'object') {
        const e = eOrValue;
        
        const input = e.target.value;
        setPhoneNumber(input);
        setValid(validatePhoneNumber(input));
        setFormData({ ...formData, [e.target.name]: e.target.value });
      } else {
        const value = eOrValue;
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
        setFormData({ ...formData, phone: value });
  
      }
    };
  
    const onChangeRecaptcha = (recaptchaToken) => {
      console.log("reCAPTCHA value: ", recaptchaToken);
      setRecaptchaValue(recaptchaToken);
    };
  const validatePhoneNumber = (PhoneNumber)=>{
    const phoneNumberPattern = /^\d{11}$/;
    return phoneNumberPattern.test(PhoneNumber);
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        console.error('Form validation failed.');
        return;
      } 
      try {
        
       
      // if (!recaptchaValue) {
      //   console.error('Please complete the reCAPTCHA');
      //   return;
      // }
        await axios.post('http://localhost:3000/api/contactUs/contactUs', {
          ...formData,

        });
        navigate('/services');
        console.log('user registred successfully!!');
      } catch (error) {
        console.error('Failed to register user :', error.message);
      }
    };
  
    
  
  
    const validateForm = () => {
      const NameValid = formData.name.length >= 3 && /^[a-zA-Z]+$/.test(formData.name) && !/\d/.test(formData.name) && !/[!@#$%^&*(),.?":{}|<>\/]/.test(formData.name);
      const subjectValid = formData.subject.length >= 3 && /^[a-zA-Z]+$/.test(formData.subject) && !/\d/.test(formData.subject) && !/[!@#$%^&*(),.?":{}|<>\/]/.test(formData.subject);
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid =
      NameValid &&
      subjectValid &&
      emailPattern.test(formData.email) &&
      recaptchaValue;
      
      setFormValid(isValid);
      
      if (!isValid) {
      return false;
      }
      
     if (!NameValid) {
    console.error(' name must be at least 3 characters long, contain only letters, and not contain numbers or special characters.');
    return false;
  }
  
  if (!subjectValid) {
    console.error('subject must be at least 3 characters long, contain only letters, and not contain numbers or special characters.');
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
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
          <input type="text" name='name' required value={formData.name} onChange={handleChange} onBlur={handleChange} placeholder=" Enter your name"/>
          {formData.name !== '' && (
<p>
  {formData.name.length < 3 && 'name must be at least 3 characters long.'}
  {!!formData.name.length && !/^[a-zA-Z]+$/.test(formData.name) && <><br />name must contain only letters.</>}
  {!!formData.name.length && /\d/.test(formData.name) && <><br />name cannot contain numbers.</>}
  {!!formData.name.length && /[!@#$%^&*(),.?":{}|<>\/]/.test(formData.name) && <><br />name cannot contain special characters.</>}
</p>
)}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
          <input type="text" name='email'value={formData.email} onChange={handleChange} onBlur={handleEmailValidation} placeholder="Enter your email" />
          {!emailValid && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>Please enter a valid email address.</p>
          )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
          <PhoneInput country ='tn'
            name="phone"
            style={{borderStyle: 'groove',borderColor :'#56ACFF', borderRadius:'4.5px', borderWidth:'1px'}}
            inputProps={{required:true, style: { paddingLeft: '50px', backgroundColor:'white', color:'black'}}}
            value={formData.phone} onChange={handleChange} />
          {! valid && <p> Please enter a valid phone number.</p>}          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
          <input type="text" name='subject' required value={formData.subject} onChange={handleChange} onBlur={handleChange} placeholder=" Subject"/>
          {formData.subject !== '' && (
<p>
  {formData.name.length < 3 && 'name must be at least 3 characters long.'}
  {!!formData.name.length && !/^[a-zA-Z]+$/.test(formData.subject) && <><br />subject must contain only letters.</>}
  {!!formData.name.length && /\d/.test(formData.subject) && <><br />subject cannot contain numbers.</>}
  {!!formData.name.length && /[!@#$%^&*(),.?":{}|<>\/]/.test(formData.subject) && <><br />subject cannot contain special characters.</>}
</p>
)}          </div>

        </div>
      </div>
      <div className="form-grp">

        <textarea name="message"value={formData.message}onChange={handleChange} onBlur={handleChange} placeholder="Write message"></textarea>
      </div>
      <div className="d-flex flex-column" style={{ marginLeft: '30%' }}>
  <div className="w-full flex-1" 
 >
    <Recaptcha
      sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
      onChange={onChangeRecaptcha}
    />
  </div>
  
</div>
      <button type="submit" className="btn btn-two">
        Send a message
      </button>
    </form>
  );
};

export default ContactUs;
