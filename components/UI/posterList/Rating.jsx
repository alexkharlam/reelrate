import { Star } from "react-feather";

function Rating({ value }) {
  return (
    <div className="absolute bottom-[0px] left-[0px] z-20 m-2 flex items-center gap-1 rounded-lg bg-gray-500 bg-opacity-60 px-2 py-1.5">
      <p className="text-base">{value}</p>
      <Star className="" />
    </div>
  );
}

export default Rating;
