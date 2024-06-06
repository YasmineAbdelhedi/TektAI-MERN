import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";
import BlogAreaOneItem from "./BlogAreaOneItem";
import { BlogItemsArray } from "./BlogItemsArray";

const BlogAreaOne = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  const blog_area_one_items = [
    {
      src: "/img/blog/blog_img01.jpg",
      url: "/blog-details",
      tag: "Kitchen",
      created_at: "Jun 4, 2022",
      author: "David Martin",
      title: "New Cleaning With Hydrogen at Peroxide Tips",
      desc: `Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla
      aliquam. Risus rutrum tellus as eget ultrices amet facilisis.`,
    },
    {
      src: "/img/blog/blog_img02.jpg",
      url: "/blog-details",
      tag: "Office",
      created_at: "Jun 4, 2022",
      author: "David Martin",
      title: "Apartment Therapy Wisdom Taking Care",
      desc: `Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla
      aliquam. Risus rutrum tellus as eget ultrices amet facilisis.`,
    },
    {
      src: "/img/blog/blog_img03.jpg",
      url: "/blog-details",
      tag: "Home",
      created_at: "Jun 4, 2022",
      author: "David Martin",
      title: "The “Flip and Fluff” Routine is the Best Thing",
      desc: `Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla
      aliquam. Risus rutrum tellus as eget ultrices amet facilisis.`,
    },
  ];

  return (
    <section className="blog-area has-animation pt-125 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title text-center mb-80">
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
                Latest News & Articles
              </span>
              <h2 className="title">
                Learn More from Our{" "}
                <span>
                  Blog
                  <svg
                    viewBox="0 0 80 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 16C4.94412 10.1497 41.8588 -8.64057 79 10.1495"
                      stroke-width="3"
                    />
                  </svg>
                </span>{" "}
                Posts
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {BlogItemsArray.slice(0, 3).map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaOneItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaOne;
