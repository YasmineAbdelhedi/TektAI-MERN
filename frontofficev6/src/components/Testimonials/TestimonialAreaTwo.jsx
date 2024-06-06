import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import TestimonialAreaTwoItem from "./TestimonialAreaTwoItem";
import { TestimonialItemsArray } from "./TestimonialItemsArray";
import SlickSlider from "../SlickSlider/SlickSlider";
import cn from "classnames";

const TestimonialAreaTwo = ({ className, headerClassName, src }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  const slick_settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
    <section className={cn(className, "testimonial-bg")} data-background={src}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className={cn(
                headerClassName,
                "section-title-two text-center mb-65 tg-heading-subheading"
              )}
            >
             
              <h2 className="title tg-element-title">
              Testimonial
              </h2>
            </div>
          </div>
        </div>

        <div className="row testimonial-active-two">
          <SlickSlider settings={slick_settings}>
            {TestimonialItemsArray.map((x, index) => (
              <div key={index} className="col-lg-4">
                <TestimonialAreaTwoItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaTwo;
