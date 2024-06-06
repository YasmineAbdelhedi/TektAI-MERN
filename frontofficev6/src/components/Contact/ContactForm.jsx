import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReactFlagsSelect from 'react-flags-select';
import Recaptcha from 'react-google-recaptcha';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PasswordStrengthBar from 'react-password-strength-bar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    profession: selectedOption,
    phone_number: PhoneNumber,
    country: selectedCountry,
    password: '',
    retypePassword: '',
  });

  const minLengthValid = formData.password.length >= 8;
  const upperCaseValid = /[A-Z]/.test(formData.password);
  const lowerCaseValid = /[a-z]/.test(formData.password);
  const numberValid = /\d/.test(formData.password);

  const handleCountrySelect = (code) => {
    setSelectedCountry(code);
  };

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleChange = (eOrValue) => {
    if (typeof eOrValue === 'object') {
      const e = eOrValue;
      if (e.target.name === 'profession') {
        setSelectedOption(e.target.value);
      }
      const input = e.target.value;
      setPhoneNumber(input);
      setValid(validatePhoneNumber(input));
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      const value = eOrValue;
      setPhoneNumber(value);
      setValid(validatePhoneNumber(value));
      setFormData({ ...formData, phone_number: value });
    }
  };

  const onChangeRecaptcha = (recaptchaToken) => {
    console.log("reCAPTCHA value: ", recaptchaToken);
    setRecaptchaValue(recaptchaToken);
  };

  const validatePhoneNumber = (PhoneNumber) => {
    const phoneNumberPattern = /^\+\d{1,3}\d{8,14}$/;
    return phoneNumberPattern.test(PhoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.termsAndConditions.checked) {
      document.getElementById('termsError').innerText = 'Please accept the Terms & Conditions';
      return;
    }
    
    if (!validateForm()) {
      console.error('Form validation failed.');
      return;
    }
    if (submitted) {
      console.error('The form has already been submitted.');
      return;}
    try {
      console.log(formData)
      if (!selectedOption) {
        console.error("Profession is required");
        return;
      }
      if (!formData.email || !formData.password) {
        console.error('Email and password are required');
        return;
      }
      // if (!recaptchaValue) {
      //   console.error('Please complete the reCAPTCHA');
      //   return;
      // }
      if (clickCount === 2) {
        toast.error('user already exists!');
        return;
      }
  
      setClickCount((prevCount) => prevCount + 1);
  
      const response=await axios.post('http://localhost:3000/api/user/register', {
        ...formData,
        profession: selectedOption,
        country: selectedCountry
      });
      console.log('Response from server:', response.data);
      
     
      setSubmitted(true);
      navigate(`/verification/${formData.email}`);

    } catch (error) {
      console.error('Failed to register user:', error.message);
      console.log('Error response:', error.response?.data); 
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const res = await axios.post("http://localhost:3000/api/user/login/success", {
          email: userInfo.data.email,
          given_name: userInfo.data.given_name,
          family_name: userInfo.data.name,
          picture: userInfo.data.picture,
        });
        localStorage.setItem('access_Token', res?.data?.accessToken);
        navigate(`/verification/${formData.email}`); 
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
    onError: (error) => console.error('Error logging in:', error),
  });

  const validateForm = () => {

    const firstNameValid = formData.firstname.length >= 3 && /^[a-zA-Z]+$/.test(formData.firstname) && !/\d/.test(formData.firstname) && !/[!@#$%^&*(),.?":{}|<>\/]/.test(formData.firstname);
    const lastNameValid = formData.lastname.length >= 3 && /^[a-zA-Z]+$/.test(formData.lastname) && !/\d/.test(formData.lastname) && !/[!@#$%^&*(),.?":{}|<>\/]/.test(formData.lastname);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValid = minLengthValid && upperCaseValid && lowerCaseValid && numberValid;
    const isValid =
      firstNameValid &&
      lastNameValid &&
      emailPattern.test(formData.email) &&
      passwordValid &&
      formData.password === formData.retypePassword ;
      // recaptchaValue;

    setFormValid(isValid);

    if (!isValid) {
      return false;
    }

    if (!firstNameValid) {
      console.error('First name must be at least 3 characters long, contain only letters, and not contain numbers or special characters.');
      return false;
    }

    if (!lastNameValid) {
      console.error('Last name must be at least 3 characters long, contain only letters, and not contain numbers or special characters.');
      return false;
    }

    if (formData.firstname === formData.lastname) {
      console.error('First name and last name cannot be the same.');
      return false;
    }

    if (!emailPattern.test(formData.email)) {
      console.error('Please enter a valid email address.');
      return false;
    }

    if (!passwordValid) {
      console.error('Password should contain at least 8 characters, one uppercase, one lowercase, and one number.');
      return false;
    }

    if (formData.password !== formData.retypePassword) {
      console.error('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleEmailValidation = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailPattern.test(formData.email));
  };

 



  return   (
    <form onSubmit={handleSubmit} style={{ marginTop:'30px'}}>
      <div className="row">
      
        <div className="col-md-6">
          
          <div className="form-grp">
          <input type="text" name='firstname' required value={formData.firstname} onChange={handleChange} onBlur={handleChange} placeholder=" Enter first name" style={{backgroundColor:'white' ,borderStyle: 'groove',borderColor :'#56ACFF', borderWidth:'1px'}}/>
          {formData.firstname !== '' && (
<p>
  {formData.firstname.length < 3 && 'First name must be at least 3 characters long.'}
  {!!formData.firstname.length && !/^[a-zA-Z]+$/.test(formData.firstname) && <><br />First name must contain only letters.</>}
  {!!formData.firstname.length && /\d/.test(formData.firstname) && <><br />First name cannot contain numbers.</>}
  {!!formData.firstname.length && /[!@#$%^&*(),.?":{}|<>\/]/.test(formData.firstname) && <><br />First name cannot contain special characters.</>}
</p>
)}
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-grp">
          <input type="text" name='lastname' required value={formData.lastname}onChange={handleChange} onBlur={handleChange} placeholder="Enter last name"  style={{backgroundColor:'white',borderStyle: 'groove',borderColor :'#56ACFF', borderWidth:'1px'}}/>
          {formData.lastname !== '' && (

<p>
  {formData.lastname.length < 3 && 'Last name must be at least 3 characters long.'}
  {!!formData.lastname.length && !/^[a-zA-Z]+$/.test(formData.lastname) && <><br />Last name must contain only letters.</>}
  {!!formData.lastname.length && /\d/.test(formData.lastname) && <><br />Last name cannot contain numbers.</>}
  {!!formData.lastname.length && /[!@#$%^&*(),.?":{}|<>\/]/.test(formData.lastname) && <><br />Last name cannot contain special characters.</>}
</p>
)}
{formData.firstname !== '' && formData.lastname !== '' && formData.firstname === formData.lastname && (
  <p>
    First name and last name cannot be the same.
  </p>
)}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-grp">
          <input type="text" name='email'value={formData.email} onChange={handleChange} onBlur={handleEmailValidation} placeholder="Enter your email" style={{backgroundColor:'white',borderStyle: 'groove',borderColor :'#56ACFF', borderWidth:'1px'}}/>
          {!emailValid && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>Please enter a valid email address.</p>
          )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp" >
            <PhoneInput country ='tn'
            name="phone_number"
            style={{borderStyle: 'groove',borderColor :'#56ACFF', borderRadius:'4.5px', borderWidth:'1px'}}
            inputProps={{required:true, style: { paddingLeft: '50px', backgroundColor:'white', color:'black'}}}
            value={formData.phone_number} onChange={handleChange} />
          {! valid && <p> Please enter a valid phone number.</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp"style={{ position: 'relative' }}>
          <input type={!showPassword ? 'text' : 'password'}   name='password' required value={formData.password}onChange={handleChange} placeholder="Enter password"   style={{backgroundColor:'white',borderStyle: 'groove',borderColor :'#56ACFF', borderWidth:'1px'}}/>
          {formData.password !== '' && !minLengthValid && <p>Password should be at least 8 characters long.</p>}
    {formData.password !== '' && !upperCaseValid && <p>Password should contain at least one uppercase letter.</p>}
    {formData.password !== '' && !lowerCaseValid && <p>Password should contain at least one lowercase letter.</p>}
    {formData.password !== '' && !numberValid && <p>Password should contain at least one number.</p>} 
    {showPassword ? (
    <i className="fas fa-eye-slash"style={{ position: 'absolute', top: '20px', right: '15px', cursor: 'pointer' }} onClick={() => setShowPassword(false)}></i>
  ) : (
    <i className="fas fa-eye" style={{ position: 'absolute', top: '20px', right: '15px', cursor: 'pointer' }}onClick={() => setShowPassword(true)}></i>
  )}
            </div>
            <PasswordStrengthBar password={formData.password} />
        </div>
        <div className="col-md-6">
        <div className="form-grp"style={{ position: 'relative' }}>
  <input 
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
    <i className="fas fa-eye-slash"style={{ position: 'absolute', top: '20px', right: '15px', cursor: 'pointer' }} onClick={() => setShowRetypePassword(false)}></i>
  ) : (
    <i className="fas fa-eye" style={{ position: 'absolute', top: '20px', right: '15px', cursor: 'pointer' }} onClick={() => setShowRetypePassword(true)}></i>
  )}
</div>

        </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
  <div className="form-grp" >
    <ReactFlagsSelect
      selected={selectedCountry}
      onSelect={(code) => handleCountrySelect(code)}
      inputProps={{
        required: true,
        style: { backgroundColor: 'white', color: 'black', borderStyle: 'groove', borderColor: '#56ACFF', borderWidth:'1px' },
      }}
      placeholder="Country"
      searchable={true}
      searchPlaceholder="Search countries"
      className="menu-flags"
    />
  </div>
</div>

<div className="col-md-6 d-flex align-items-center justify-content-center">
  <div className="form-grp">
    <select
      value={selectedOption}
      onChange={(e) => { setSelectedOption(e.target.value); changeTextColor(); }}
      name='profession'
      className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-14 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
        isOptionSelected ? 'text-black dark:text-white' : ''
      }`}
    >
      <option value="Developer" className="text-body dark:text-bodydark">
        Developer
      </option>
      <option value="Professional" className="text-body dark:text-bodydark">
        Professional
      </option>
      <option value="Student" className="text-body dark:text-bodydark">
        Student
      </option>
      <option value="Freelancer" className="text-body dark:text-bodydark">
        Freelancer
      </option>
      <option value="Data_Scientist" className="text-body dark:text-bodydark">
        Data Scientist
      </option>
    </select>
  </div>
</div>

     

<div className="d-flex flex-column" style={{ marginLeft: '20%' }}>
  <div className="w-full flex-1" 
 >
  <input 
  type="checkbox" 
  name="termsAndConditions" 
  id="termsAndConditions" 
  required 
/> 
<label htmlFor="termsAndConditions">
  I agree to the <a href="#">Terms & Conditions</a> of TektAi
</label>
<div id="termsError" style={{ color: 'red' }}></div>


    <Recaptcha
      sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
      onChange={onChangeRecaptcha}
    />
  </div>
  
</div>

      </div>
      
      <p style={{ textAlign: 'center', fontSize:'15px' }}>Already have an account?
                <Link to="/Home" className="">Sign in</Link></p>
            
  <div className="row">
      <div className="mb-2">
  <input
    type="submit"
    
    value="Enroll now"
    onClick={() => {
      toast.success('user added successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    

    }}
    className={`w-full cursor-pointer rounded-lg border border-primary bg-primary  text-white transition hover:bg-opacity-90 ${
      window.innerWidth >= 768 ? 'lg:w-full' : ''
    }`}
    style={{
      borderRadius: '10px',
      height: '50px',
      width:'400px',
      marginLeft:'10%'
     
     
    }}
  />
      <p style={{marginLeft:'30%',color:'black'}}>Are U a company?<a href="/company" style={{color:'red',fontWeight:'bold'}}> sign up here</a></p>
</div>

 <div style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
 <button onClick={()=>login()}  className="flex w-full items-center justify-center gap-3.5 rounded-lg    hover:bg-opacity-50  dark:bg-meta-4 dark:hover:bg-opacity-100"
 >                    <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_191_13499)">
                        <path
                          d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_191_13499">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                 
                </button>
  <button onClick={()=>login()}  className="flex w-full items-center justify-center gap-3.5 rounded-lg    hover:bg-opacity-50  dark:bg-meta-4 dark:hover:bg-opacity-100"
     >      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill="#000000" d="M10,0.5C4.715,0.5,0.5,4.715,0.5,10c0,4.865,3.56,8.899,8.211,9.653c0.6,0.104,0.817-0.265,0.817-0.588 c0-0.29-0.011-1.044-0.016-2.043c-3.335,0.724-4.033-1.475-4.033-1.475c-0.544-1.376-1.329-1.744-1.329-1.744 c-1.091-0.748,0.083-0.732,0.083-0.732c1.206,0.086,1.837,1.241,1.837,1.241c1.07,1.835,2.805,1.305,3.493,0.999 c0.109-0.781,0.419-1.312,0.761-1.613c-2.665-0.299-5.467-1.332-5.467-5.93c0-1.312,0.469-2.382,1.236-3.219 c-0.124-0.301-0.536-1.523,0.117-3.176c0,0,1.009-0.322,3.3,1.23c0.958-0.266,1.984-0.398,3.002-0.403 c1.018,0.005,2.043,0.137,3.002,0.403c2.29-1.552,3.298-1.23,3.298-1.23c0.654,1.653,0.242,2.875,0.118,3.176 c0.769,0.837,1.235,1.907,1.235,3.219c0,4.609-2.805,5.628-5.477,5.923c0.43,0.371,0.812,1.102,0.812,2.222 c0,1.605-0.014,2.896-0.014,3.289c0,0.327,0.212,0.698,0.821,0.579C16.44,18.899,20.5,14.865,20.5,10 C20.5,4.715,16.285,0.5,10,0.5z"/>
      </svg>
    </span>
  </button>
  <button onClick={()=>login()}  className="flex w-full items-center justify-center gap-3.5 rounded-lg    hover:bg-opacity-50  dark:bg-meta-4 dark:hover:bg-opacity-100"
    >      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
       
        <path fill="#1877F2" d="M10 0C4.477 0 0 4.477 0 10c0 5.024 3.668 9.167 8.471 9.931v-7.03H5.957V10h2.514V7.772c0-2.482 1.479-3.851 3.743-3.851 1.079 0 2.14.193 2.14.193v2.343h-1.203c-1.187 0-1.56.737-1.56 1.495V10h2.656l-.424 2.931h-2.232V19.93C16.332 19.596 20 15.196 20 10c0-5.523-4.477-10-10-10z"/>
      </svg>
    </span>
  </button>
  
  </div>
  </div>

    </form>
    
  );
};

export default ContactForm;