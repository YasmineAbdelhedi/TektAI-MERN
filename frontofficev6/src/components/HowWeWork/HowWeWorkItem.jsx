import React from "react";
import { Link } from "react-router-dom";

const HowWeWorkItem = ({ item }) => {
  return (
    <div className="work-item wow fadeInUp" data-wow-delay={`${item.delay}s`}>
      <div className="work-icon">
        {item.icon}

        <span className="number">{item.count}</span>
      </div>

      <div className="work-content">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default HowWeWorkItem;
