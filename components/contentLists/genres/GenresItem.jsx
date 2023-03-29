import { useHoverState } from "@/utils/hooks/use-hover-state";
import Image from "next/image";
import Link from "next/link";

function GenresItem({ name, id }) {
  const { isHovered, hoverHandler, blurHandler } = useHoverState();

  return (
    <Link
      href={`/rrtop/${id}`}
      onMouseEnter={hoverHandler}
      onMouseLeave={blurHandler}
      className=" "
    >
      <Image
        className="w-full"
        width={707}
        height={546}
        alt={name}
        src={`/genres/${name}-${isHovered ? "2" : "1"}.png`}
      />
    </Link>
  );
}

export default GenresItem;
