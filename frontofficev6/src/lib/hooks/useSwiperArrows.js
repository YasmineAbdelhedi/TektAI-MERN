import { useRef } from "react";

export const useSwiperArrows = () => {
  const swiperRef = useRef();
  const toPrev = () => swiperRef.current?.slidePrev();
  const toNext = () => swiperRef.current?.slideNext();

  return {
    sliderRef: swiperRef,
    toNext,
    toPrev,
  };
};
