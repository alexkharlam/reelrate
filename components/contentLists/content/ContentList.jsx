import { useCollectionsData } from "@/utils/hooks/use-collections-data";
import ContentItem from "./ContentItem";
import PosterGrid from "../../UI/posterList/PosterGrid";

function ContentList({ listItems }) {
  const { rates, watchList } = useCollectionsData();

  return (
    <PosterGrid>
      {listItems.map((item) => (
        <ContentItem
          watchList={watchList}
          rates={rates}
          key={item.id}
          item={item}
        />
      ))}
    </PosterGrid>
  );
}

export default ContentList;
