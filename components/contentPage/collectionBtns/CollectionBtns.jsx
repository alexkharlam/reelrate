import WatchListBtn from "./WatchListBtn";
import RateBtn from "./RateBtn";

function CollectionBtns({ content }) {
  return (
    <div className="mb-3 flex gap-1.5">
      <WatchListBtn content={content} />
      <RateBtn content={content} />
    </div>
  );
}

export default CollectionBtns;
