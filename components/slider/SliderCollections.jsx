import Link from "next/link";
import { Eye, Star } from "react-feather";
import HeadingLink from "../UI/HeadingLink";

function SliderCollections() {
  return (
    <div className="px-3">
      <HeadingLink title="Collections" url="/collections" />
      <div className="flex h-7 gap-3 text-base font-semibold md:text-3xl">
        <Link
          className="group relative w-1/2 rounded-sm bg-[#5F3DC4] p-2 transition-colors duration-150 hover:bg-[#5637b0]"
          href="/collections/watch-list"
        >
          <p>Watch list</p>
          <div className="absolute bottom-[0px] right-[0px] rounded-tl-sm bg-[#4C319D] px-3 py-3.5 text-[#BFB1E7] transition-colors duration-150 group-hover:bg-[#442c8d]">
            <Eye strokeWidth={1} size={72} />
          </div>
        </Link>
        <Link
          className="group relative w-1/2  rounded-sm bg-[#C92A2A] p-2 transition-colors duration-150 hover:bg-[#b52626]"
          href="/collections/rates"
        >
          <p>Rated movies</p>
          <div className="absolute bottom-[0px] right-[0px] rounded-tl-sm bg-[#A12222] px-3 py-3.5 text-[#E49595] transition-colors duration-150 group-hover:bg-[#911f1f]">
            <Star strokeWidth={1} size={72} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SliderCollections;
