import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import cn from "classnames";

const BrandArea = ({ className }) => {
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={cn(className ? className : "brand-area pb-130")}>
      <div className="container">
        <div className="row brand-active">
          <SlickSlider settings={slick_settings}>
            {[1, 2, 3, 4, 5, 6].map((x) => (
              <div key={x} className="col-12">
                <div className="brand-item">
                  <img src={`/img/brand/brand_img0${x}.png`} alt="" />
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
