import React from "react";

const BlogDetailsPagination = () => {
  return (
    <div className="blog-next-prev">
      <div className="post prev-post">
        <a href="#">
          Previous<i className="fas fa-chevron-left"></i>
        </a>
      </div>
      <div className="post next-post">
        <a href="#">
          Next<i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogDetailsPagination;
