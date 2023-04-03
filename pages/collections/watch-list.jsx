import MediaCardsList from "@/components/contentLists/MediaCards/MediaCardsList";
import HeadingLink from "@/components/UI/HeadingLink";
import { useSelector } from "react-redux";
import MotionTransition from "@/components/Motion/MotionTransition";

function WatchListPage() {
  const watchList = useSelector((state) => state.collections.watchList);

  return (
    <MotionTransition className="px-3">
      <HeadingLink title="My watch list" />
      <MediaCardsList mediaList={watchList} />
    </MotionTransition>
  );
}

export default WatchListPage;
