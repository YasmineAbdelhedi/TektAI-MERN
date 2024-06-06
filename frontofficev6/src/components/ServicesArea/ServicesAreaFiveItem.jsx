import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { bgImgFromData } from "../../lib/helpers";

const ServicesAreaFiveItem = ({ item }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  return (
    <div className="services-item-five" data-background={item.src3}>
      <div className="services-icon">{item.icon}</div>

      <div className="services-content-five">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default ServicesAreaFiveItem;
