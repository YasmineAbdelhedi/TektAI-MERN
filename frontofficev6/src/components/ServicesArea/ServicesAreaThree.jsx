import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import { jarallax } from "jarallax";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import ServicesAreaThreeItem from "./ServicesAreaThreeItem";
import SlickSlider from "../SlickSlider/SlickSlider";

const ServicesAreaThree = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  const slick_settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="services-area-three pt-125">
      <div
        className="services-bg jarallax"
        data-background="/img/bg/services_bg.jpg"
      ></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title-two white-title text-center mb-65 tg-heading-subheading animation-style2">
              <span className="sub-title">What We’re Offering</span>
              <h2 className="title tg-element-title">
                Providing the Best Services <br />
                for Our Customers
              </h2>
            </div>
          </div>
        </div>

        <div className="services-item-wrap-two">
          <div className="row services-active">
            <SlickSlider settings={slick_settings}>
              {BestServiceItemsArray.map((x, index) => (
                <div key={index} className="col-lg-3">
                  <ServicesAreaThreeItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaThree;
