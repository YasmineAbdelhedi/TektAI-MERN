import React from "react";
import { Link } from "react-router-dom";

const ServicesAreaTwoItem = ({ item }) => {
  return (
    <div className="services-item-two wow fadeInUp" data-wow-delay=".2s">
      <div className="services-icon-two">{item.icon}</div>

      <div className="services-content-two">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default ServicesAreaTwoItem;
