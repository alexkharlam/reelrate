import { Star } from "react-feather";
import { useSelector } from "react-redux";
import { useState } from "react";
import RateContent from "@/components/UI/rateContent/RateContent";

function RateBtn({ content }) {
  const rates = useSelector((state) => state.collections.rates);
  const oldRate = rates.find((item) => item.id === content.id);

  const [isRating, setIsRating] = useState(false);
  const toggleIsRating = () => setIsRating((state) => !state);

  return (
    <>
      <button
        onClick={toggleIsRating}
        className={`flex items-center gap-1.5 rounded-lg bg-gray-700 px-2.5 py-1.5 text-base transition-all hover:scale-105 ${
          oldRate ? "bg-primary-600" : "bg-gray-700"
        }`}
      >
        {oldRate && <p>{oldRate.rateValue}</p>}
        <Star />
      </button>
      {isRating && (
        <RateContent
          oldRate={oldRate}
          content={content}
          closeWindow={toggleIsRating}
        />
      )}
    </>
  );
}

export default RateBtn;
