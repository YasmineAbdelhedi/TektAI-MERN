import React from "react";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import ServicesAreaFourItem from "./ServicesAreaFourItem";
import SlickSlider from "../SlickSlider/SlickSlider";

const ServicesAreaFour = () => {
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
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
    <section className="services-area-four">
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style1">
              <span className="sub-title">OUR Service</span>
              <h2 className="title tg-element-title">Our Best Services</h2>
            </div>
          </div>
        </div>

        <div className="row services-active-two">
          <SlickSlider settings={slick_settings}>
            {BestServiceItemsArray.map((x, index) => (
              <div key={index} className="col">
                <ServicesAreaFourItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaFour;
