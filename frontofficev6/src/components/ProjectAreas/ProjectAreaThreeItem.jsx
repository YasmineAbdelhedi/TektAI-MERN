import React from "react";
import { Link } from "react-router-dom";

const ProjectAreaThreeItem = ({ item }) => {
  return (
    <div className="project-item-three">
      <div className="project-thumb-three">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div>

      <div className="project-content-three">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>
        <span>{item.title}</span>
      </div>
    </div>
  );
};

export default ProjectAreaThreeItem;
