import React from "react";
import { Link } from "react-router-dom";

const BlogAreaOneItem = ({item}) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to={item.url}>
          <img src={item.src} alt="" />
        </Link>
        <Link to="/blog" className="tag">
          {item.tag}
        </Link>
      </div>

      <div className="blog-post-content">
        <div className="blog-meta">
          <ul className="list-wrap">
            <li>
              <i className="fas fa-calendar-alt"></i>{item.created_at}
            </li>
            <li>
              <i className="far fa-user"></i>
              <Link to="/blog">{item.author}</Link>
            </li>
          </ul>
        </div>

        <h2 className="title">
          <Link to={item.url}>
            {item.title}
          </Link>
        </h2>

        <p>
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default BlogAreaOneItem;
