import React from "react";

const TestimonialAreaOneItem = ({ item }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-icon">
        <i className="fas fa-quote-right"></i>
      </div>

      <div className="testimonial-content">
        <p>{item.desc}</p>

        <div className="testimonial-avatar-info">
          <div className="avatar-thumb">
            <img src={item.src} alt="" />
          </div>

          <div className="avatar-content">
            <h2 className="title">{item.title}</h2>

            <p>{item.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaOneItem;
