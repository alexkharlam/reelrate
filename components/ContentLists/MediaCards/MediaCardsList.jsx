import { useCollectionsData } from "@/utils/hooks/use-collections-data";
import MediaCardItem from "./MediaCardItem";

function MediaCardsList({ mediaList }) {
  const { rates, watchList } = useCollectionsData();

  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {mediaList.map((mediaItem) => (
        <MediaCardItem
          watchList={watchList}
          rates={rates}
          key={mediaItem.id}
          mediaItem={mediaItem}
        />
      ))}
    </ul>
  );
}

export default MediaCardsList;
