import React from "react";
import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";
import FaqItem from "../FaqArea/FaqItem";
import { FaqList } from "../FaqArea/FaqList";
import ServicesDetailsAside from "./ServicesDetailsAside";

const ServicesDetailsArea = () => {
  return (
    <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 order-0 order-lg-2">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img src="/img/images/services_details_img.jpg" alt="" />
              </div>
              <div className="services-details-content">
                <h2 className="title">We give the best Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices pretium
                  nisi amet facilisis. Augue eu vulputate tortor egestas cursus
                  vivamus. that any Commodo dictum iaculis eget massa phasellus
                  ultrices nunc dignissim. Id nulla amet tincidunt urna sed
                  massa sed. Pellentesque imperdiet proin aliquam nisl nulla. In
                  donec massa ultrices amet eget. Tristique sed purus et
                  maecenas condimentum massa dolor. Lacus purus lectus diam diam
                  tellus libero id sapien dummy at justo.
                </p>
                <p className="different-info">
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices vivamus.
                  tha massa nunc dignissim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                  nulla aliquam. Risus rutrum tellus is eget ultrices pretium
                  nisi amet facilisis. Augue eu vulputate tortor egestas cursus
                  vivamus. that any Commodo dictum iaculis eget massa phasellus
                  ultrices nunc dignissim. Id nulla amet tincidunt urna sed
                  massa sed. Pellentesque imperdiet proin aliquam nisl nulla.
                </p>

                <div className="service-quality-wrap">
                  <h4 className="title">Service Quality</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus is eget
                    ultrices pretium nisi amet facilisis. Augue eu vulputate
                    tortor egestas cursus vivamus. that any Commodo iaculis eget
                    massa phasellus ultrices nunc dignissim.
                  </p>

                  <div id="slider1" className="beer-slider" data-start="50">
                    <BeforeAfterSlider
                      before={"/img/images/before_img.jpg"}
                      after={"/img/images/after_img.jpg"}
                    />
                  </div>
                </div>

                <div className="services-faq faq-content">
                  <div className="accordion" id="accordionExample">
                    {FaqList.map((x, index) => (
                      <FaqItem
                        key={index}
                        parentId={"accordionExample"}
                        item={x}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-8">
            <ServicesDetailsAside />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsArea;
