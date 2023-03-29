import { Eye } from "react-feather";
import { useDispatch } from "react-redux";
import { addToCollection } from "@/store/collections-slice";
import { deleteFromCollection } from "@/store/collections-slice";

function WatchListBtn({ content, oldWatchListState }) {
  const dispatch = useDispatch();

  const toggleWatchList = function () {
    if (oldWatchListState) {
      dispatch(deleteFromCollection("watchList", content.id));
      return;
    }

    const watchListItem = {
      id: content.id,
      posterPath: content.posterPath,
      title: content.title,
      mediaType: content.mediaType,
    };
    dispatch(addToCollection("watchList", watchListItem));
  };

  return (
    <button
      onClick={toggleWatchList}
      className="opacity-0 group-hover:opacity-100"
      type="button"
    >
      <Eye
        fill={oldWatchListState ? "#fff" : "rgba(0, 0, 0, 0)"}
        className="text-gray-300"
        strokeWidth={1.5}
        size={32}
      />
    </button>
  );
}

export default WatchListBtn;
