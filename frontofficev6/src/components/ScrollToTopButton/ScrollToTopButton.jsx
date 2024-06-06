import React from "react";
import { scrollToTop } from "../../lib/helpers";

const ScrollToTopButton = () => {
  return (
    <button
      className="scroll-top scroll-to-target"
      data-target="html "
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up" />
    </button>
  );
};

export default ScrollToTopButton;
