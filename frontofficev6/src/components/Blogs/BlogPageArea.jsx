import React from "react";
import BlogAreaTwoItem from "./BlogAreaTwoItem";
import { BlogItemsArray } from "./BlogItemsArray";

const BlogPageArea = () => {
  return (
    <section className="inner-blog-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          {[...BlogItemsArray, ...BlogItemsArray].map((x, index) => (
            <div key={index} className="col-lg-6 col-md-8">
              <BlogAreaTwoItem item={x} />
            </div>
          ))}
        </div>

        <div className="autoload-btn text-center mt-30">
          <a href="#!" className="btn">
            Auto load
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPageArea;
