import React from "react";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import { Link } from "react-router-dom";

const ServicesAreaAll = () => {
  return (
    <section className="services-area-three inner-services-two pt-130 pb-90">
      <div className="container custom-container-two">
        <div className="services-item-wrap-two">
          <div className="row">
            {BestServiceItemsArray.map((item, index) => (
              <div key={index} className="col-xl-4 col-md-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaAll;
