import { ChevronLeft } from "react-feather";
import { ChevronRight } from "react-feather";

function SliderBtns({ onScrollClick, isActive }) {
  const clickHandler = function (direction) {
    onScrollClick(direction);
  };

  return (
    <>
      {isActive.left && (
        <button
          onClick={clickHandler.bind(null, "backward")}
          className="z-30 hover:bg-gray-500 left-2.5 absolute top-1/2 -translate-y-full p-0.5 bg-gray-600 rounded-sm bg-opacity-90"
          type="button"
        >
          <ChevronLeft className="text-gray-300" strokeWidth={1} size={48} />
        </button>
      )}
      {isActive.right && (
        <button
          onClick={clickHandler.bind(null, "forward")}
          className="z-30 hover:bg-gray-500 right-2.5 absolute top-1/2 -translate-y-full p-0.5 bg-gray-600 rounded-sm bg-opacity-90"
          type="button"
        >
          <ChevronRight className="text-gray-300" strokeWidth={1} size={48} />
        </button>
      )}
    </>
  );
}

export default SliderBtns;
