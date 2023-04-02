import Link from "next/link";
import { ArrowRight } from "react-feather";

function SliderSeeMoreBtn({ url }) {
  return (
    <div className=" h-400 flex w-7.5 shrink-0 snap-start items-center justify-center rounded-sm p-2 transition-colors duration-100">
      <Link
        className="flex flex-col items-center rounded-sm bg-gray-700 py-2 px-2.5 hover:bg-gray-600"
        href={url}
      >
        <ArrowRight strokeWidth={1} className="" size={48} />
        <p className="text-lg">See more</p>
      </Link>
    </div>
  );
}

export default SliderSeeMoreBtn;
