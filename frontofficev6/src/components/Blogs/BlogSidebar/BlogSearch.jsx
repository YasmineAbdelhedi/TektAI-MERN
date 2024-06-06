import React from "react";

const BlogSearch = () => {
  return (
    <div className="sidebar-search">
      <form action="#">
        <input type="text" placeholder="Search..." />
        
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
