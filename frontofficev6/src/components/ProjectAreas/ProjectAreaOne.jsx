import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";

// // swiper bundle styles
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";
import ProjectAreaOneItem from "./ProjectAreaOneItem";
import { ProjectList } from "./ProjectList";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProjectAreaOne = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  const swiper_settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: false,
    pagination: {
      el: ".project-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  };

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section className="project-area has-animation project-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center white-title mb-75">
              <span className="sub-title">
                <svg
                  viewBox="0 0 41 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                    fill="currentcolor"
                  />
                </svg>
                Our Successful Project
              </span>
              <h2 className="title">
                Keep your Vision to Our Latest{" "}
                <span>
                  Projects.
                  <svg
                    viewBox="0 0 173 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 22.9998C8.5 14.2152 90 -14 172 14.2148"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="project-item-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container project-active">
                <div className="swiper-wrapper">
                  <Swiper
                    {...swiper_settings}
                    onBeforeInit={(swiper) => {
                      sliderRef.current = swiper;
                    }}
                  >
                    {ProjectList.map((x, index) => (
                      <SwiperSlide key={index}>
                        <ProjectAreaOneItem item={x} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="project-swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaOne;
