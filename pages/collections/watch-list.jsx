import MediaCardsList from "@/components/contentLists/MediaCards/MediaCardsList";
import HeadingLink from "@/components/UI/HeadingLink";
import { useSelector } from "react-redux";

function WatchListPage() {
  const watchList = useSelector((state) => state.collections.watchList);

  return (
    <div className="px-3">
      <HeadingLink title="My watch list" />
      <MediaCardsList mediaList={watchList} />
    </div>
  );
}

export default WatchListPage;
