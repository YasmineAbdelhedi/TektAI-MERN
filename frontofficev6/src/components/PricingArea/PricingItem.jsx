import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const PricingItem = ({ item }) => {
  return (
    <div
      className={cn("pricing-box wow", item.wowClass)}
      data-wow-delay={item.delay + "s"}
    >
      <div className="pricing-top">
        <div className="pricing-icon">{item.icon}</div>

        <h6 className="pricing-plan">{item.title}</h6>

        <h2 className="pricing-price">${item.price}</h2>
      </div>

      <div className="pricing-bottom">
        <div className="pricing-list">
          <ul className="list-wrap">
            {item.facilities.map((x, index) => (
              <li key={index}>
                <i className="fas fa-check" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="pricing-btn">
          <Link to={item.url} className="btn">
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
