import React from "react";
import { Link } from "react-router-dom";

const ProjectAreaOneItem = ({ item }) => {
  return (
    <div className="swiper-slide">
      <div className="project-item">
        <div className="project-thumb">
          <Link to={item.url}>
            <img src={item.src} alt="" />
          </Link>
        </div>

        <div className="project-content">
          <h2 className="title">
            <Link to={item.url}>{item.title}</Link>
          </h2>

          <span>{item.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectAreaOneItem;
