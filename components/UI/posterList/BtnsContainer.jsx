import RateBtn from "./RateBtn";
import WatchListBtn from "./WatchListBtn";

function BtnsContainer({ oldRate, oldWatchListState, content }) {
  return (
    <div className="absolute right-[0px] bottom-[0px] z-20 flex flex-col gap-1 p-2 ">
      <RateBtn content={content} oldRate={oldRate} />
      <WatchListBtn content={content} oldWatchListState={oldWatchListState} />
    </div>
  );
}

export default BtnsContainer;
