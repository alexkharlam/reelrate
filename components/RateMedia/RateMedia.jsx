import { useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "react-feather";
import RateStars from "./RateMediaStars";

import { useDispatch } from "react-redux";
import { addToCollection } from "@/store/collections-slice";
import { deleteFromCollection } from "@/store/collections-slice";

function RateMedia({ content, closeWindow, oldRate }) {
  const dispatch = useDispatch();

  const modalRef = useRef();

  const rateHandler = function (rateValue) {
    closeWindow();
    const rate = {
      id: content.id,
      rateValue,
      posterPath: content.posterPath,
      title: content.title,
      mediaType: content.mediaType,
    };

    dispatch(addToCollection("rates", rate));
  };

  const deleteRateHandler = function () {
    closeWindow();
    dispatch(deleteFromCollection("rates", oldRate.id));
  };

  const closeHandler = function (e) {
    if (e.target.closest(".modal") === modalRef.current) return;
    closeWindow();
  };

  const jsx = (
    <div
      onClick={closeHandler}
      className="fixed top-[0px] left-[0px] z-50 flex h-screen w-full items-center justify-center bg-gray-1000 bg-opacity-50 "
    >
      <div
        ref={modalRef}
        className="modal relative rounded-sm bg-gray-600 px-3 pb-3 pt-3.5"
      >
        {oldRate && (
          <button
            className="absolute top-[0px] left-[0px] m-1 rounded-sm bg-gray-700 py-1 px-2 hover:bg-gray-500"
            onClick={deleteRateHandler}
          >
            Clear rate
          </button>
        )}
        <button
          onClick={closeWindow}
          className="close absolute right-[0px] top-[0px] p-1"
        >
          <X />
        </button>
        <h3 className="mb-2 text-center text-1xl font-semibold">
          {content.title}
        </h3>

        <RateStars oldRate={oldRate} rateHandler={rateHandler} />
      </div>
    </div>
  );

  return createPortal(jsx, document.body);
}

export default RateMedia;
