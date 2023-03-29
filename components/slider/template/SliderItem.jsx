import { transformContent } from "@/utils/helpers/transformContent";
import { memo } from "react";
import { imageConfig } from "@/utils/config/tmdb-config";
import Link from "next/link";
import Image from "next/image";

const SliderItem = memo(function SliderItem({ rawContent }) {
  const content = transformContent(rawContent);
  const imgSrc = imageConfig.baseUrl + "w780" + content.backdropPath;

  return (
    <Link
      href={`/${content.mediaType}/${content.id}`}
      className=" group shrink-0 snap-start w-7.5 rounded-sm transition-colors duration-100 object-cover"
    >
      {content.backdropPath && (
        <img
          className="w-full h-auto rounded-sm mb-1.5 group-hover:brightness-75 transition duration-150"
          src={imgSrc}
        />
      )}
      {!content.backdropPath && (
        <Image
          className="w-full h-auto rounded-sm mb-1.5"
          src="/backdrop-empty.png"
          width={780}
          height={439}
          alt={`${content.title} image`}
        />
      )}
      <p className="text-base overflow-hidden h-4 group-hover:text-gray-300 transition duration-150">
        {content.title}
      </p>
    </Link>
  );
});

export default SliderItem;
