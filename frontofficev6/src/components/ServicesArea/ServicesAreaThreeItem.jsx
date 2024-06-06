import React from "react";
import { Link } from "react-router-dom";

const ServicesAreaThreeItem = ({ item }) => {
  return (
    <div className="services-item-three">
      <div className="services-thumb-three">
        <Link to={item.url}>
          <img src={item.src} alt="" />
        </Link>
      </div>

      <div className="services-content-three">
        <div className="icon">{item.icon}</div>

        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.subtitle}</p>

        <Link to={item.url} className="btn btn-two">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ServicesAreaThreeItem;
