import { EyeOff, FolderPlus } from "react-feather";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCollection } from "@/store/collections-slice";
import { deleteFromCollection } from "@/store/collections-slice";

function WatchListBtn({ content }) {
  const watchList = useSelector((state) => state.collections.watchList);
  const oldWatchListState = watchList.find((item) => item.id === content.id);

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
      className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-base transition-all hover:scale-105 ${
        oldWatchListState ? "bg-primary-600" : "bg-gray-700"
      }`}
    >
      {oldWatchListState ? <EyeOff /> : <FolderPlus />}
    </button>
  );
}

export default WatchListBtn;
