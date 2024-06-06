import React from "react";
import FaqItem from "./FaqItem";
import { FaqList } from "./FaqList";

const FaqAreaOne = () => {
  return (
    <section className="faq-area pt-90  overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-title-two mb-40 tg-heading-subheading animation-style2">
                <span className="sub-title">Our Company FAQs</span>
                <h2 className="title tg-element-title">
                  Frequently Asked <br />
                  Question from Our Clients
                </h2>
              </div>

              <div className="accordion" id="accordionExample">
                {FaqList.map((x, index) => (
                  <FaqItem key={index} parentId={"accordionExample"} item={x} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-8">
            <div className="faq-img">
              <img src="/img/images/faq_img.png" data-aos="fade-left" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
