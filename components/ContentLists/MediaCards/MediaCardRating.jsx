import { Star } from "react-feather";

function MediaCardRating({ value }) {
  return (
    <div className="absolute bottom-[0px] left-[0px] z-20 m-2 flex items-center gap-1 rounded-lg bg-gray-500 bg-opacity-70 px-1 py-0.5 md:px-2 md:py-1.5">
      <p className="text-base">{value}</p>
      <Star className="" />
    </div>
  );
}

export default MediaCardRating;
