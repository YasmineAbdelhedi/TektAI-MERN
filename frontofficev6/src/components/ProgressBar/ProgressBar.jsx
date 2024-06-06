import React from "react";

const ProgressBar = ({ item }) => {
  return (
    <div className="progress-item">
      {/* <h5 className="title">{item.title}</h5>
      <div className="progress">
        <div
          className="progress-bar wow slideInLeft"
          data-wow-delay={item.delay}
          role="progressbar"
          style={{ width: `${item.width}%` }}
          aria-valuenow={item.width}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {" "}
          <span>{item.width}%</span>
        </div>
      </div> */}
    </div>
  );
};

export default ProgressBar;
