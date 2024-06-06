import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const VideoArea = () => {
  return (
    <section className="video-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 order-0 order-lg-2">
            <div className="video-img-wrap">
              <img src="/img/images/video_img01.png" alt="" />
              <img
                src="/img/images/video_img02.png"
                data-aos="fade-up"
                alt=""
              />

              <Popup
                trigger={
                  <a
                    href="#vid"
                    className="play-btn popup-video"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-play"></i>
                  </a>
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
            <div className="video-content">
              <div className="section-title-two mb-25 tg-heading-subheading animation-style1">
                <span className="sub-title">Best Experts in Cleaning</span>
                <h2 className="title tg-element-title">
                  Your Happiness Is Our First Priority
                </h2>
              </div>
              <p>
                Commodo dictum iaculis eget mas phasellus ultrices nunc
                dignissim. Id nulla amet tincidunt urna sed massa the sed massa
                ultrices amet a dictum amet tincidunt massa done.
              </p>

              <ul className="list-wrap">
                <li>
                  <div className="list-item">
                    <img src="/img/icon/video_icon01.svg" alt="" />
                    <Link to="/services-details">
                      Residential Cleaning Services
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                    <img src="/img/icon/video_icon02.svg" alt="" />
                    <Link to="/services-details">
                      Commercial Cleaning Services
                    </Link>
                  </div>
                </li>
              </ul>

              <Link to="/services" className="btn">
                Discover MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
