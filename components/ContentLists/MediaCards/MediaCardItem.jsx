import MediaCardBtns from "./MediaCardBtns/MediaCardBtns";
import MediaCardRating from "./MediaCardRating";
import Link from "next/link";
import MediaCardDescription from "./MediaCardDescription";
import MediaCardImage from "./MediaCardImage";
import { findCollections } from "@/utils/helpers/collectionsFunctions";

function MediaCardItem({ watchList, rates, mediaItem }) {
  const { exWatchList, exRate } = findCollections(watchList, rates, mediaItem);

  return (
    <li className="group relative">
      <MediaCardBtns
        mediaItem={mediaItem}
        oldRate={exRate}
        oldWatchListState={exWatchList}
      />
      {exRate && <MediaCardRating value={exRate.rateValue} />}
      <Link href={`/${mediaItem.mediaType}/${mediaItem.id}`}>
        <MediaCardDescription mediaItem={mediaItem} />
        <MediaCardImage
          alt={mediaItem.title}
          posterPath={mediaItem.posterPath}
        />
      </Link>
    </li>
  );
}

export default MediaCardItem;
