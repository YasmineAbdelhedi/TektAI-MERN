import React, { useEffect } from "react";
import CounterAreaOneItem from "./CounterAreaOneItem";
import { bgImgFromData } from "../../lib/helpers";
import { CounterItemsArray } from "./CounterItemsArray";
import { jarallax } from "jarallax";
import cn from "classnames";

const CounterAreaOne = ({ className }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.3,
    });
  }, []);

  return (
    <section className={cn("counter-area", className)}>
      <div className="container">
        <div
          className="counter-inner jarallax"
          data-background="/img/bg/counter_bg.jpg"
        >
          <div className="row">
            {CounterItemsArray.map((x, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <CounterAreaOneItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterAreaOne;
