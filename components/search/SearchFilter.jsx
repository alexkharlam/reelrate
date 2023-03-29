import { useRouter } from "next/router";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";

function SearchFilter({ filter, updateFilter }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive((state) => !state);

  const filterHandler = function (e) {
    const textValue = e.target.textContent;
    const value =
      textValue === "All" ? "multi" : textValue === "Movies" ? "movie" : "tv";
    updateFilter({ name: textValue, value: value });
    toggleActive();
  };

  return (
    <div className="relative mb-3 text-base">
      <button
        onClick={toggleActive}
        className="flex items-center gap-1.5"
        type="button"
      >
        <p>{filter.name}</p>
        <ArrowRight
          className={`transition-all duration-200 ${isActive && "rotate-90"}`}
        />
      </button>

      {isActive && (
        <ul className="absolute bottom-[0px] left-[0px] z-50 translate-y-full overflow-hidden rounded-sm bg-gray-600">
          <li>
            <button
              onClick={filterHandler}
              className="w-full p-1.5 text-left hover:bg-gray-500"
              type="button"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={filterHandler}
              className="w-full p-1.5 text-left hover:bg-gray-500"
              type="button"
            >
              Movies
            </button>
          </li>
          <li>
            <button
              onClick={filterHandler}
              className="w-full p-1.5 text-left hover:bg-gray-500"
              type="button"
            >
              TV shows
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;
