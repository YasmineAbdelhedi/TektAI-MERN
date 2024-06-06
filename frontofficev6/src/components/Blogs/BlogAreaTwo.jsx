import React from "react";
import BlogAreaTwoItem from "./BlogAreaTwoItem";
import { BlogItemsArray } from "./BlogItemsArray";

const BlogAreaTwo = () => {
  return (
    <section className="blog-area-two pt-125 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style2">
              <span className="sub-title">Latest News & Articles</span>
              <h2 className="title tg-element-title">
                Learn More from Our <br />
                Blog Posts
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {BlogItemsArray.slice(0, 2).map((x, index) => (
            <div key={index} className="col-lg-6 col-md-8">
              <BlogAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
