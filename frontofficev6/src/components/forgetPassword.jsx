import { jarallax } from "jarallax";
import React, { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Recaptcha from 'react-google-recaptcha'
import axios from 'axios';
import HeaderNavMenu from "./Headers/HeaderNavMenu";

const ForgetPassword = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const onChangeRecaptcha = (recaptchaToken) => {
      console.log("reCAPTCHA value: ", recaptchaToken);
      setRecaptchaValue(recaptchaToken);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/api/user/forgot-password', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
        
        const result = await response.json();
        const { oldUser, token } = result;
    
        if (oldUser && token) {
          const sendMailResponse = await fetch('http://localhost:3000/api/user/sendmail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: oldUser._id, token, email })
          });
    
          const sendMailResult = await sendMailResponse.json();
          console.log(sendMailResult);
        } else {
          console.error('ID or token is undefined in response data');
        }
      } catch (error) {
        console.log(error);
      }
    };
    
  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      
    });
  }, []);
  
 
  return (


    <section
      className="banner-area-three jarallax banner-bg-three"
      style={{backgroundColor:'#7EB0CC'}}
    >  
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="banner-form-wrap">
              <h2 className="title" style={{color:'darkblue'}}>Rest Password</h2>

              <form onSubmit={handleSubmit}>
               
                <div className="form-grp">
                <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)
            }
            style={{color:"black"}}
            />

                </div>
                <div className="d-flex flex-column" style={{ marginLeft: '13%' }}>
  <div className="w-50 flex-1">
    <Recaptcha
      sitekey="6Lej7MYpAAAAANcOGfuylrtynDnk9JHl-mu6mdgI"
      onChange={onChangeRecaptcha}
    />
  </div>
</div> <br />
                <input  type="submit" value="Send" className="btn btn-two"/>
                  
               
                <Link to="/" className=""> Go back to sign in?</Link>



              </form>
             
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-content-three">
            <img src="img/images/noir.svg" alt="" style={{width:"80px", marginLeft:"140px"}} />
              <h2 className="title" data-aos="fade-right" data-aos-delay="0" style={{color:"black"}}>
              Reset Your Password and Regain Access to Your Account</h2>

              <p data-aos="fade-right" data-aos-delay="300" style={{color:"black"}}>
              
              Enter your email address below. Once submitted, 
              you will receive instructions via email to reset your password securely.
               For further assistance, please contact our support team.</p>
              <div
                className="banner-btn"
                data-aos="fade-right"
                data-aos-delay="600"
              >
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default ForgetPassword;


