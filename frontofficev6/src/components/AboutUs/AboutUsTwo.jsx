import React from "react";
import { Link } from "react-router-dom";

const AboutUsTwo = () => {
  const facilities = [
    "We are Committed",
    "Highly Rated Cleaning",
    "Insured & Bonded",
    "Trusted Professionals",
    "Residential Cleaning",
    "Commercial Cleaning",
  ];

  return (
    <section className="about-area-two pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/home2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two tg-heading-subheading animation-style1">
              <div className="section-title-two mb-20">
                {/* <span className="sub-title">About Us</span> */}
                <h2 className="title tg-element-title">
                  Welcome to Best <br />
                  Challenging application
                </h2>
              </div>
              <p>
              Welcome to TektAI, where we serve as the bridge between industries
               seeking solutions and the innovative minds of data science. 
               Our platform facilitates collaboration, providing a dynamic 
               space for companies to submit challenges and data science 
               developers to craft solutions. With a commitment to fostering
                innovation, transparency, and community engagement, TektAI is 
                dedicated to driving impactful advancements in the field of
                 industry-driven data science. Join us in shaping the future 
                 of innovation at TektAI.
              </p>

              {/* <div className="about-list">
                <ul className="list-wrap">
                  {facilities.map((x, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* <div className="content-bottom">
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>
                <div className="contact">
                  <span className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <a href="tel:0123456789">1-888-452-1505</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
