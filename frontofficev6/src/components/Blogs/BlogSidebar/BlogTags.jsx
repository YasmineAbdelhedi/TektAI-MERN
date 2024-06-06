import React from "react";

const BlogTags = () => {
  const tags = [
    "Cleaning",
    "carpet",
    "house",
    "kitchen",
    "Wash",
    "Floor",
    "Agency",
    "home",
  ];

  return (
    <>
      <h4 className="widget-title">Tags</h4>

      <div className="tag-list-wrap">
        <ul className="list-wrap">
          {tags.map((tag, index) => (
            <li key={index}>
              <a href="#">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogTags;
