import ContentList from "@/components/contentLists/content/ContentList";
import HeadingLink from "@/components/UI/HeadingLink";
import { useSelector } from "react-redux";

function WatchListPage() {
  const listItems = useSelector((state) => state.collections.watchList);

  return (
    <div className="px-3">
      <HeadingLink title="My watch list" />
      <ContentList listItems={listItems} />
    </div>
  );
}

export default WatchListPage;
