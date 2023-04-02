import { useState } from "react";
import { Star } from "react-feather";

import RateMedia from "@/components/RateMedia/RateMedia";

function MediaCardRateBtn({ oldRate, mediaItem }) {
  const [isRating, setIsRating] = useState(false);

  const toggleIsRating = () => setIsRating((state) => !state);

  return (
    <>
      <button onClick={toggleIsRating} className="relative" type="button">
        <Star
          fill={oldRate ? "#fff" : "rgba(0, 0, 0, 0)"}
          className={oldRate ? "text-white" : "text-gray-300"}
          strokeWidth={1.5}
          size={32}
        />
      </button>
      {isRating && (
        <RateMedia
          oldRate={oldRate}
          content={mediaItem}
          closeWindow={toggleIsRating}
        />
      )}
    </>
  );
}

export default MediaCardRateBtn;
