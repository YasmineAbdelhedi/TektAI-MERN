import React from "react";

const BlogCategories = () => {
  return (
    <>
      <h4 className="widget-title">Categories</h4>

      <div className="cat-list-wrap">
        <ul className="list-wrap">
          <li>
            <a href="#">Apartment</a>
          </li>
          <li>
            <a href="#">House Cleaning</a>
          </li>
          <li>
            <a href="#">Office</a>
          </li>
          <li>
            <a href="#">Plumbing</a>
          </li>
          <li>
            <a href="#">Windows</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogCategories;
