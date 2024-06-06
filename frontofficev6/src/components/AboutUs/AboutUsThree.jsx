import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ProgressBarItems } from "../ProgressBar/ProgressBarItems.js";

const AboutUsThree = () => {
  return (
    <section className="about-area-three pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-6 col-md-10">
            <div className="about-img-wrap-two">
              <img src="/img/images/x.jpg" alt="" />
              <img
                src="/img/images/a.jpg"
                data-aos="fade-up"
                alt="chemdakhlek"
              />
              <img src="/img/images/h4_about_shape01.png" alt="" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="about-content-three">
              <div className="section-title-three mb-25">
                <span className="sub-title">About us</span>
                <h2 className="title">Uniting Industry Challenges with Data Science Innovation</h2>
              </div>

              <p>
              At TektAI, we unite industry challenges and data science innovation.
               Our platform fosters collaboration between companies and developers,
                recognizing top performers and sparking groundbreaking advancements.
                 Join us in shaping the future of data science.
              </p>

              {/* <div className="progress-wrap">
                {ProgressBarItems.map((x, index) => (
                  <ProgressBar key={index} item={x} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsThree;
