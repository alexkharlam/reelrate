import ContentList from "@/components/contentLists/content/ContentList";
import HeadingLink from "@/components/UI/HeadingLink";
import { useSelector } from "react-redux";

function RatesPage() {
  const listItems = useSelector((state) => state.collections.rates);

  return (
    <div className=" px-3">
      <HeadingLink title="My rates" />
      <ContentList listItems={listItems} />
    </div>
  );
}

export default RatesPage;
