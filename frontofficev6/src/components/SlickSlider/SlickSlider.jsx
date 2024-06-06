import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSlider = React.forwardRef((props, ref) => {
  return (
    <Slider ref={ref} {...props.settings}>
      {props.children}
    </Slider>
  );
});

export default SlickSlider;

// w/o ref
// const SlickSlider = (props) => {
//   return (
//     <Slider {...props.settings}>
//       {props.children}
//     </Slider>
//   );
// };
