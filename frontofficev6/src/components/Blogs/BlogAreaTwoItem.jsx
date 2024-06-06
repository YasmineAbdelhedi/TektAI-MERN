import React from "react";
import { Link } from "react-router-dom";

const BlogAreaTwoItem = ({ item }) => {
  return (
    <div className="blog-item-two">
      <div className="blog-thumb-two">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div>

      <div className="blog-content-two">
        <Link to="/blog" className="tag">
          {item.tag}
        </Link>

        <div className="blog-meta">
          <ul className="list-wrap">
            <li>
              <i className="fas fa-calendar-alt"></i>
              {item.created_at}
            </li>
            <li>
              <i className="far fa-user"></i>
              <Link to="/blog.html">{item.author}</Link>
            </li>
          </ul>
        </div>

        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <Link to={item.url} className="btn btn-two">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogAreaTwoItem;
