import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const IntroductionAreaOne = () => {
  return (
    <section id="intro" className="introduction-area pb-130">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="introduction-img-wrap">
              <img src="/img/images/introduction_img01.png" alt="" />
              <img
                src="/img/images/introduction_img02.png"
                data-aos="fade-right"
                alt=""
              />

              <Popup
                trigger={
                  <div className="play-btn">
                    <a
                      href="#intro"
                      className="popup-video"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                }
                position=""
                modal={true}
              >
                <Iframe
                  url="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                  width="100%"
                  height="350px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </Popup>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                <span className="sub-title">Our Introduction</span>
                <h2 className="title tg-element-title">
                  Welcome to Best <br />
                  Cleaning Company
                </h2>
              </div>

              <p className="info-one">
                Lorem ipsum dolor sit amet consectetur suspendisse nulla
                aliquam. Risus rutrum tellus ultrices amet facilisis.
              </p>
              <p>
                Commodo dictum iaculis eget mas phasellus ultrices nunc
                dignissim. Id nulla amet tincidunt urna sed massa the sed massa
                ultrices amet a egetristique maecenas condimentum dolor. dictum
                iaculis eget more amet tincidunt urna massa done.
              </p>

              <div className="introduction-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>We are Committed
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Highly Rated Cleaning
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Insured & Bonded
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Trusted Professionals
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Residential Cleaning
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Commercial Cleaning
                  </li>
                </ul>
              </div>

              <div className="introduction-bottom">
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:0123456789">1-888-452-1505</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
