import React, { useState } from "react";

import { Star } from "react-feather";

const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function RateMediaStars({ rateHandler, oldRate }) {
  const [hoveredRate, setHoveredRate] = useState(
    oldRate ? oldRate.rateValue : 0
  );

  const hoverHandler = function (e) {
    setHoveredRate(e.target.closest("button").id);
  };

  const clickHandler = function (rate) {
    rateHandler(rate);
  };

  const blurHandler = function () {
    setHoveredRate(0);
  };

  return (
    <>
      <p className="mb-2 text-center text-3xl">{hoveredRate}</p>
      <div
        onMouseLeave={blurHandler}
        className="mb-2 grid grid-cols-10 justify-center gap-0.5 md:gap-1.5"
      >
        {rates.map((rate) => (
          <button
            onClick={clickHandler.bind(null, rate)}
            className={`button ${hoveredRate >= rate && "text-primary"}`}
            id={rate}
            onMouseEnter={hoverHandler}
            key={rate}
            type="button"
          >
            <Star size={28} fill={hoveredRate >= rate ? "#ffd43b" : "#333"} />
          </button>
        ))}
      </div>
    </>
  );
}

export default RateMediaStars;
