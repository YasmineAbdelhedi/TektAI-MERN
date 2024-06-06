import React from "react";
import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = ({ before, after, start = 0.5 }) => {
  return (
    <>
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        sliderPositionPercentage={start}
      />
    </>
  );
};

export default BeforeAfterSlider;
