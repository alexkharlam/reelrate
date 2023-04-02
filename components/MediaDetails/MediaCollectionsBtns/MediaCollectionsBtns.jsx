import MediaWatchListBtn from "./MediaWatchListBtn";
import MediaRatingBtn from "./MediaRatingBtn";

function MediaCollectionsBtns({ content }) {
  return (
    <div className="mb-3 flex gap-1.5">
      <MediaWatchListBtn content={content} />
      <MediaRatingBtn content={content} />
    </div>
  );
}

export default MediaCollectionsBtns;
