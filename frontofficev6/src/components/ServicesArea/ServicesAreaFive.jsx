import React from "react";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import ServicesAreaFiveItem from "./ServicesAreaFiveItem";

const ServicesAreaFive = () => {
  return (
    <section className="services-area-five">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title-three text-center mb-60">
              <span className="sub-title">Our Services</span>
              <h2 className="title"> Bridge the Gap Between Industry and Data Science</h2>
              <p>
              TektAI is a comprehensive development platform designed
               to connect businesses with skilled data science developers
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {BestServiceItemsArray.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaFiveItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaFive;
