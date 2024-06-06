import React from "react";
import BlogCategories from "./BlogCategories";
import BlogRecents from "./BlogRecents";
import BlogSearch from "./BlogSearch";
import BlogTags from "./BlogTags";

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
      <div className="widget">
        <BlogSearch />
      </div>

      <div className="widget">
        <BlogRecents />
      </div>

      <div className="widget">
        <BlogCategories />
      </div>

      <div className="widget">
        <BlogTags />
      </div>
    </aside>
  );
};

export default BlogSidebar;
