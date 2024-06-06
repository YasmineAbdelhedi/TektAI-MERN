import React from "react";

const TestimonialAreaTwoItem = ({ item }) => {
  return (
    <div className="testimonial-item-two">
      <div className="testimonial-icon-two">
        <i className="fas fa-quote-right"></i>
      </div>

      <div className="testimonial-content-two">
        <p>{item.desc}</p>

        <div className="testimonial-avatar-info">
          <div className="avatar-thumb">
            <img src={item.src} alt="" />
          </div>

          <div className="avatar-content">
            <h4 className="title">{item.title}</h4>

            <p>{item.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaTwoItem;
