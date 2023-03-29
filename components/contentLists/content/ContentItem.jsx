import BtnsContainer from "../../UI/posterList/BtnsContainer";
import Rating from "../../UI/posterList/Rating";
import Link from "next/link";
import PosterDescription from "../../UI/posterList/PosterDescription";
import PosterImage from "../../UI/posterList/PosterImage";
import { findCollections } from "@/utils/helpers/collectionsFunctions";

function ContentItem({ watchList, rates, item }) {
  const { exWatchList, exRate } = findCollections(watchList, rates, item);

  return (
    <li className="group relative">
      <BtnsContainer
        content={item}
        oldRate={exRate}
        oldWatchListState={exWatchList}
      />
      {exRate && <Rating value={exRate.rateValue} />}
      <Link href={`/${item.mediaType}/${item.id}`}>
        <PosterDescription content={item} />
        <PosterImage posterPath={item.posterPath} />
      </Link>
    </li>
  );
}

export default ContentItem;
