import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bgImgFromData } from "../../lib/helpers";
import { jarallax } from "jarallax";

const BannerOne = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section
      className="banner-area jarallax banner-bg"
      data-background="/img/banner/banner_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-7">
            <div className="banner-content">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Cleaning Services
              </span>

              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Best Cleaning Service in Home
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                amet facilisis.
              </p>

              <div className="banner-btn">
                <Link
                  t="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  Discover MORE
                </Link>
                <Link
                  to="/services"
                  className="btn btn-two wow fadeInRight"
                  data-wow-delay=".8s"
                >
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

export default BannerOne;
