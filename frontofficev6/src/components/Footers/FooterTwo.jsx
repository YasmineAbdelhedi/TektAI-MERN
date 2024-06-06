import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterBottom from "./FooterBottom";
import MapComponent from "../../components/MapComponent";

const FooterTwo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    question: ''
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, question: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.error('Form validation failed.');
      return;
    }
    
    try {
      await axios.post('http://localhost:3000/api/askUs/askUs', {
        ...formData,
      });
      // Show success toast
      toast.success('Question submitted successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the toast after 3 seconds
      });
      // Clear the form data
      setFormData({ question: '' });
      console.log('Question submitted successfully!!');
    } catch (error) {
      console.error('Failed to submit question:', error.message);
    }
  };

  const validateForm = () => {
    const questionValid = formData.question.length >= 5;
    const isValid = questionValid;
    
    setFormValid(isValid);
    
    if (!isValid) {
      return false;
    }
    
    if (!questionValid) {
      console.error('Question must be at least 5 characters long!');
      return false;
    }

    return true;
  };
  return (
    <footer >
      <div className="footer-area footer-bg" style={{backgroundColor:"#010D26"}}>
        <div className="footer-top">
          <div className="container">
            <div className="footer-logo-area" >
              <div className="row ">
              <div className="col-md-4">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/images/banche.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8" style={{marginTop:"50px"}}>
                  <div className="footer-social-menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100089043922895">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16 ">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
      </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/_TektAi"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/sarra-chahab-a25a39224/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/sarrachahab/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
                      </li>
                      <li>
                        <a href="https://wa.me/+21652152184"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Contact Us</h4>
                  </div>
                  <div className="footer-content">
                    <div className="footer-contact">
                      <ul className="list-wrap">
                        <li className="phone-addess">
                          <i className="fas fa-phone-alt"></i>
                          <a href="tel:0123456789">21656558402</a>
                        </li>
                        <li className="email-addess col-md-12" >
                          <a href="mailto:tektaitheoriginals@gmail.com"><p>tektaitheoriginals@gmail.com</p></a>
                        </li>
                      </ul>
                    </div>
                    <p>06 rue des jasmins , la Marsa 2078</p>
                    <MapComponent/>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Links</h4>
                  </div>
                  <div className="fw-link-list">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/team">Meet Our Team</Link>
                      </li>
                      <li>
                        <Link to="/contact">What We Do</Link>
                      </li>
                      <li>
                        <Link to="/blog">News</Link>
                      </li>
                      <li>
                        <Link to="/contactUs">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Services</h4>
                  </div>
                  <div className="fw-link-list">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/services"></Link>
                      </li>
                      <li>
                        <Link to="/services">Industry-driven Challenges</Link>
                      </li>
                      <li>
                        <Link to="/services">Collaborative Environment</Link>
                      </li>
                      <li>
                        <Link to="/services">Automated Evaluation & Recognition</Link>
                      </li>
                      <li>
                        <Link to="/services">Data Access & Sharing</Link>
                      </li>
                      <li>
                        <Link to="/services">Mentorship & Training</Link>
                      </li>
                      <li>
                        <Link to="/services">Recruitment & Talent Pool</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Ask us</h4>
                  </div>
                  <div className="footer-newsletter">
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z"/>
</svg>    write your questions below
                    </p>
                    <form onSubmit={handleSubmit}>
                      <input type="text" required value={formData.question} onChange={handleChange} onBlur={handleChange} placeholder="what is Tektai?" />
                      {formData.question !== '' && (
<p>
  {formData.question.length < 3 && 'question must be at least 3 characters long.'}</p>)}
                      <button type="submit" className="btn"  onClick={() => {
                    toast.success('Question added successfully!', {
                      position: 'bottom-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  }}>
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            

        <FooterBottom />
      </div>
    </footer>
  );
};


export default FooterTwo;
