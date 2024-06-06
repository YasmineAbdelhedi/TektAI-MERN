import React, { useRef } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaOneItem from "./TestimonialAreaOneItem";
import { TestimonialItemsArray } from "./TestimonialItemsArray";

const TestimonialAreaFour = () => {
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
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

  const sliderRef = useRef();

  return (
    <section className="testimonial-area-four pt-130 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-title-three mb-60">
              <span className="sub-title">Our Testimonial</span>
              <h2 className="title">Our Testimonial</h2>
              <p>
              Discover What Users Are Saying About TektAI
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-3">
            <div className="testimonial-nav position-relative">
              <button
                type="button"
                className="slick-arrow"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                type="button"
                className="slick-arrow"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row testimonial-active">
          <SlickSlider ref={sliderRef} settings={slick_settings}>
            {TestimonialItemsArray.map((x, index) => (
              <div key={index} className="col-lg-6">
                <TestimonialAreaOneItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaFour;
