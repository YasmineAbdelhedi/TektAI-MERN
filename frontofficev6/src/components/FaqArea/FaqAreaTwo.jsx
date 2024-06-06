import React from "react";
import FaqItem from "./FaqItem";
import { FaqList } from "./FaqList";

const FaqAreaTwo = () => {
  return (
    <section className="faq-area-two pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-img-two" data-aos="fade-right">
              <img src="/img/images/faq1.avif" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-title-three mb-30">
                <span className="sub-title">FAQ</span>
                <h2 className="title">
                  Frequently Asked Question from Our Clients
                </h2>
              </div>

              <div className="accordion" id="accordionExample">
                {FaqList.map((x, index) => (
                  <FaqItem key={index} parentId={"accordionExample"} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
