import MediaCardsList from "@/components/contentLists/MediaCards/MediaCardsList";
import HeadingLink from "@/components/UI/HeadingLink";
import { useSelector } from "react-redux";

function RatesPage() {
  const ratesList = useSelector((state) => state.collections.rates);

  return (
    <div className="px-3">
      <HeadingLink title="My rates" />
      <MediaCardsList mediaList={ratesList} />
    </div>
  );
}

export default RatesPage;
