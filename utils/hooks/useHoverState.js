import { useState } from "react";

export const useHoverState = function () {
  const [isHovered, setIsHovered] = useState(false);

  const hoverHandler = () => setIsHovered(true);
  const blurHandler = () => setIsHovered(false);

  return { isHovered, hoverHandler, blurHandler };
};
