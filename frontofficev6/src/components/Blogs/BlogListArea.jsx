import React from "react";
import BlogSidebar from "./BlogSidebar/BlogSidebar";
import { BlogItemsArray } from "./BlogItemsArray";
import BlogInnerItem from "./BlogInnerItem";

const BlogListArea = () => {
  return (
    <section className="inner-blog-area-two pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="inner-blog-item-wrap">
              {[...BlogItemsArray, ...BlogItemsArray].map((x, index) => (
                <BlogInnerItem key={index} item={x} />
              ))}
            </div>

            <div className="autoload-btn text-center mt-60">
              <a href="#!" className="btn">
                Auto load
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListArea;
