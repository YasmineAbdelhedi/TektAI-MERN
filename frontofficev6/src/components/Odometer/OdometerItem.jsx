import React from "react";
import Odometer from "react-odometerjs";

const OdometerItem = ({ amount }) => {
  return (
    <Odometer
      value={amount}
      format="(,ddd).dd"
      duration={1000}
      animation={"count"}
    />
  );
};

export default OdometerItem;
