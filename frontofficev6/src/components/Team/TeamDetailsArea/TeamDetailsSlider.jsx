import React, { useRef } from "react";
import SlickSlider from "../../SlickSlider/SlickSlider";
import TeamOneItem from "../TeamOneItem";
import { TeamOneItemsArray } from "../TeamOneItemsArray";

const TeamDetailsSlider = () => {
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
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

  const sliderRef = useRef();

  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-8">
          <h2 className="related-title">Related Team Member</h2>
        </div>
        
        <div className="col-md-4">
          <div className="team-nav position-relative">
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

      <div className="row team-active">
        <SlickSlider ref={sliderRef} settings={slick_settings}>
          {TeamOneItemsArray.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-9">
              <TeamOneItem item={x} />
            </div>
          ))}
        </SlickSlider>
      </div>
    </>
  );
};

export default TeamDetailsSlider;
