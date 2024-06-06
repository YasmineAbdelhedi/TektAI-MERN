import React from "react";
import PricingItem from "./PricingItem";
import { PricingList } from "./PricingList";

const PricingArea = () => {
  return (
    <section className="pricing-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-90 tg-heading-subheading animation-style1">
              <span className="sub-title">Our Pricing</span>
              <h2 className="title tg-element-title">
                Choose Your Pricing Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {PricingList.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <PricingItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingArea;
