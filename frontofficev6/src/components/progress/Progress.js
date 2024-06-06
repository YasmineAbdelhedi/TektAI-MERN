import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          backgroundColor: "#007bff",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
