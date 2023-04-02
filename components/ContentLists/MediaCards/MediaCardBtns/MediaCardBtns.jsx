import MediaCardRateBtn from "./MediaCardRateBtn";
import MediaCardWatchListBtn from "./MediaCardWatchListBtn";

function MediaCardBtns({ oldRate, oldWatchListState, mediaItem }) {
  return (
    <div className="absolute right-[0px] bottom-[0px] z-20 flex flex-col gap-1 p-2 group-hover:opacity-100 md:opacity-0 ">
      <MediaCardRateBtn mediaItem={mediaItem} oldRate={oldRate} />
      <MediaCardWatchListBtn
        mediaItem={mediaItem}
        oldWatchListState={oldWatchListState}
      />
    </div>
  );
}

export default MediaCardBtns;
