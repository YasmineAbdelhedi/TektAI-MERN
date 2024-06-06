import { jarallax } from "jarallax";
import React, { useState ,useEffect} from 'react';
import { bgImgFromData } from "../../lib/helpers";
import { Link } from "react-router-dom";
import Recaptcha from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialGithub } from "reactjs-social-login";
import { GithubLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
const token = 'EAASBlNLuOuUBO6ni3m0aneyDai3ZBuZAYdZApzJaBZBJ6ecatPHPfgQi9sfiutdMN3002CB0JZB2wDna7KjdPODyZCQIb6DCeR7wJlHdZBWP5KdZBZA8Ga2yZCCI2bOs5GgoC8aDg0TdJWggzzZC73tVGj4xjdyZAaZA6ZCP8MHyMj4nFJJVMMwvthBIkztRIh7CH8OPx9GKWlscZCySd1qidMYVDVsOlncqw4lBs1YW5yPAOYgd8hcVwZDZD'; 

const BannerThree = () => {
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const handleChange = (e /*: { target: { name: any; value: any; }; } */) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangeRecaptcha = (recaptchaToken) => {
    console.log("reCAPTCHA value: ", recaptchaToken);
    setRecaptchaValue(recaptchaToken);
  };
  
  const handleSubmitUser = async (e /*: { preventDefault: () => void; } */) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
        console.error('Email and password are required');
        return;
    }
    // if (!recaptchaValue) {
    //   console.error('Please complete the reCAPTCHA');
    //   return;
    // }
    
    try {
        const response = await axios.post('http://localhost:3000/api/user/login', {
            email: formData.email,
            password: formData.password
  
        });
        console.log('Login successful:', response.data.message);
        if (formData.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(formData));
        }
        localStorage.setItem('access_Token', response.data.accessToken);
        
        console.log(response.data)
       navigate('/home-3');
        
     
    } catch (error) {
        console.error('Failed to login', error.message);
       
    }
  };
  const handleSubmitCompany = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
        console.error('Email and password are required');
        return;
    }
    // if (!recaptchaValue) {
    //   console.error('Please complete the reCAPTCHA');
    //   return;
    // }
    
    try {
        const response = await axios.post('http://localhost:3000/api/company/login', {
            email: formData.email,
            password: formData.password
  
        });
        console.log('Login successful:', response.data.message);
        if (formData.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(formData));
        }
        localStorage.setItem('access_Token', response.data.accessToken);
        
        console.log(response.data)
       navigate('/companyhome');
        
     
    } catch (error) {
        console.error('Failed to login', error.message);
       
    }
  };
  
  const onSuccess = async (response) => {
    try {
      const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${response.access_token}` },
        
      });
      localStorage.setItem('token', response.data.accessToken);

      const res = await axios.post("http://localhost:3000/api/user/login/success", {
        email: userInfo.data.email,
        given_name: userInfo.data.given_name,
        family_name: userInfo.data.name,
        picture: userInfo.data.picture,
      });
      localStorage.setItem('access_Token', res?.data?.accessToken);
      navigate('/profile', { state: { email: userInfo.data.email } });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const onFailure = (error) => {
    console.error(" l'erreur ",error);
  };
  const login = useGoogleLogin({
    onSuccess,
    onError: onFailure,
  });
  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      const user = JSON.parse(rememberedUser);
      setFormData(user);
      setRecaptchaValue('recaptchaValue'); 
    }
  }, []);
  
  
  useEffect(() => {
    bgImgFromData();
  }, []);
  
  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);
  const handleFacebookLogin = async (response) => {
    try {
      const res = await axios.post('http://localhost:3000/api/user/facebook/login', {
      });
  
      if (res.status === 200) {
        navigate('/profile');
      } else {
        console.error('Failed to login with Facebook:', res.data.message);
      }
    } catch (error) {
      console.error('Error while logging in with Facebook:', error.message);
    }
  };
  
  const handleGithubLogin = async (response) => {
    try {
      const res = await axios.post('http://localhost:3000/api/user/github/login', {
        headers: { Authorization: `Bearer ${response.access_token}` },
      });
      console.log(res.data);
      navigate('/home-3');

    } catch (error) {
      console.error('Erreur lors de la connexion avec GitHub :', error);
    }
  };
  
  return (
    <section
      className="banner-area-three jarallax banner-bg-three"
      data-background="/img/logo/haha.jpg"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="banner-form-wrap">
              
              <h2 className="title" style={{color:'darkblue'}}>Sign in to TektAi</h2>

              <form>
               
                <div className="form-grp">
                  <input  name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}  style={{color:'black'}}/>
                </div>
                <div className="form-grp">
                  <input  type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="6+ Characters, 1 Capital letter"  style={{color:'black'}} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <button onClick={handleSubmitUser} className="btn btn-two" style={{ margin: "8px" }}>
                    User
                  </button>
                  <button onClick={handleSubmitCompany} className="btn btn-two" style={{ margin: "8px" }}>
                    Company
                  </button>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                <p>Remember me <input type="checkbox" name="rememberMe" id="rememberMe"  />
</p>
                <Link to="/forgot-password" className="">Forget password?</Link>
                </div>
              <p style={{ textAlign: 'center', fontSize:'15px' }}>Don't have an account?
  <Link to="/contact" className="">Sign up</Link>
</p>

<div className="d-flex flex-column" style={{ marginLeft: '13%' }}>
  <div className="w-50 flex-1">
    <Recaptcha
      sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
      onChange={onChangeRecaptcha}
    />
  </div>
</div> 



<hr />
  <div className="d-flex flex-column flex-lg-row gap-4 justify-content-evenly">
  <button onClick={()=>login()} className="flex items-center justify-center w-full gap-3.5 rounded-lg border border-stroke bg-transparent p-3 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 ">
    <span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">       <g clip-path="url(#clip0_191_13499)">
          <path d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217" fill="#4285F4"/>
          <path d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999" fill="#34A853"/>
          <path d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z" fill="#FBBC05"/>
          <path d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z" fill="#EB4335"/>
        </g>
        <defs>
          <clipPath id="clip0_191_13499">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </span>
  </button>
   <LoginSocialFacebook
  appId="1268376100813541"
  onResolve={(response) => {
    handleFacebookLogin(response);
  }}
  onReject={(error) => {
    console.log(error);
  }}
>
  <FacebookLoginButton />
</LoginSocialFacebook>
        <LoginSocialGithub
  appId="655fd48e47627dbde6f8"
  onResolve={(response) => {
    handleGithubLogin(response);
  }}
  onReject={(error) => {
    console.log(error);
  }}
>
  <GithubLoginButton />
</LoginSocialGithub>

 
</div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-content-three">
              <h2 className="title" data-aos="fade-right" data-aos-delay="0">
              A journey of a thousand miles begins with a single step              </h2>

              <p data-aos="fade-right" data-aos-delay="300">
              
              Industry challenges meet developer brilliance on TektAI, 
              sparking a competitive yet collaborative environment that fuels data science innovation.              </p>
              <div
                className="banner-btn"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <Link to="/services" className="btn">
                  Discover MORE
                </Link>
                <Link to="/services" className="btn btn-two">
                  Our service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
