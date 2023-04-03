import { useCollectionsData } from "@/utils/hooks/use-collections-data";
import MediaCardItem from "./MediaCardItem";
import { MotionRevealUl } from "@/components/Motion/MotionReveal";

function MediaCardsList({ mediaList }) {
  const { rates, watchList } = useCollectionsData();

  return (
    <MotionRevealUl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {mediaList.map((mediaItem) => (
        <MediaCardItem
          watchList={watchList}
          rates={rates}
          key={mediaItem.id}
          mediaItem={mediaItem}
        />
      ))}
    </MotionRevealUl>
  );
}

export default MediaCardsList;
