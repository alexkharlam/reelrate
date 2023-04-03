import { Eye, EyeOff, FolderPlus } from "react-feather";
import { useDispatch } from "react-redux";
import { addToCollection } from "@/store/collections-slice";
import { deleteFromCollection } from "@/store/collections-slice";

function MediaCardWatchListBtn({ mediaItem, oldWatchListState }) {
  const dispatch = useDispatch();

  const toggleWatchList = function () {
    if (oldWatchListState) {
      dispatch(deleteFromCollection("watchList", mediaItem.id));
      return;
    }

    const watchListItem = {
      id: mediaItem.id,
      posterPath: mediaItem.posterPath,
      title: mediaItem.title,
      mediaType: mediaItem.mediaType,
    };
    dispatch(addToCollection("watchList", watchListItem));
  };

  return (
    <button onClick={toggleWatchList} className="" type="button">
      <Eye
        fill={oldWatchListState ? "#fff" : "rgba(0, 0, 0, 0)"}
        className="text-gray-300"
        strokeWidth={1.5}
        size={32}
      />
    </button>
  );
}

export default MediaCardWatchListBtn;
