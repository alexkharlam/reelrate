import { useRef, useState } from "react";

export const useSlider = function () {
  const sliderRef = useRef();
  const [leftBtnActive, setLeftBtnActive] = useState(false);
  const [rightBtnActive, setRightBtnActive] = useState(true);
  let debounceTimeout;

  const scrollHandler = function () {
    // debouncing to avoid running logic to frequently (scroll event fired on every px)
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      // if slider is maximum scrolled to right, disable right button
      if (scrollLeft + 25 >= scrollWidth - clientWidth) {
        setRightBtnActive(false);
      } else {
        setRightBtnActive(true);
      }

      // if slider is maximum scrolled to left, disable left button
      if (scrollLeft <= 25) {
        setLeftBtnActive(false);
      } else {
        setLeftBtnActive(true);
      }
    }, 250);
  };

  // scrolling on btns click
  const scrollIn = function (direction) {
    const { clientWidth } = sliderRef.current;

    sliderRef.current.scrollBy({
      left: direction === "backward" ? -clientWidth : clientWidth - 250,
      behavior: "smooth",
    });

    scrollHandler();
  };

  return {
    sliderRef,
    isBtnsActive: { left: leftBtnActive, right: rightBtnActive },
    scrollIn,
    scrollHandler,
  };
};
