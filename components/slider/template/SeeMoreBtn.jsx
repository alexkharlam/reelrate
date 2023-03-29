import Link from "next/link";
import { ArrowRight } from "react-feather";

function SeeMoreBtn({ url }) {
  return (
    <div className=" shrink-0 snap-start h-400 w-7.5 rounded-sm p-2 transition-colors duration-100 flex items-center justify-center">
      <Link
        className="flex flex-col items-center bg-gray-700 hover:bg-gray-600 py-2 px-2.5 rounded-sm"
        href={url}
      >
        <ArrowRight strokeWidth={1} className="" size={48} />
        <p className="text-lg">See more</p>
      </Link>
    </div>
  );
}

export default SeeMoreBtn;
