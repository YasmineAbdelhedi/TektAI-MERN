import React from "react";
import { Link } from "react-router-dom";

const ServicesAreaFourItem = ({ item }) => {
  return (
    <div className="services-item-four">
      <div className="services-thumb-four">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div>

      <div className="services-content-four">
        <div className="services-icon">{item.icon}</div>

        <h3 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h3>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default ServicesAreaFourItem;
