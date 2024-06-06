import React from "react";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  // const facilities = [
  //   "Industry-driven Challenges",
  //   "Collaborative Environment",
  //   "Automated Evaluation & Recognition",
  //   "Data Access & Sharing",
  //   "Recruitment & Talent Pool",
  //   "Mentorship & Training"
  // ];

  return (
    <section className="banner-area-two banner-bg-two">
      <div className="container-fluid p-0">
        <div className="row justify-content-end g-0">
          <div className="col-lg-6">
            <div className="banner-content-two">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                 TektAi 
              </span>

              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Where ambition and hard work meets 
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".6s">
              Join TektAI Today: Unleash Your Data Science Skills,
               Solve Real-World Challenges,
                and Shape the Future of Industry Innovation!
              </p>

              {/* <ul className="list-wrap wow fadeInUp" data-wow-delay=".8s">
                {facilities.map((x, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle" /> {x}
                  </li>
                ))}
              </ul> */}

              <div className="banner-content-bottom">
                <Link
                  to="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay="1s"
                >
                  Discover MORE
                </Link>

                <div
                  className="banner-contact wow fadeInRight"
                  data-wow-delay="1s"
                >
                  <div className="icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>

                  <div className="content">
                    <span>Call us:</span>
                    <a href="tel:0123456789">(+216) 56558402</a>
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

export default BannerTwo;
