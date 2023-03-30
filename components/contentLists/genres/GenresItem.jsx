import { useHoverState } from "@/utils/hooks/use-hover-state";
import Image from "next/image";
import Link from "next/link";

function GenresItem({ name, id }) {
  return (
    <Link
      href={`/rrtop/${id}`}
      className="group relative transition-all duration-150 hover:scale-105"
    >
      <Image
        className=" w-full"
        width={707}
        height={546}
        alt={name}
        src={`/genres/${name}-1.png`}
      />
      <Image
        className="absolute left-[0px] top-[0px] w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        width={707}
        height={546}
        alt={name}
        src={`/genres/${name}-2.png`}
      />
    </Link>
  );
}

export default GenresItem;
