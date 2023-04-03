import { imageConfig } from "@/utils/config/tmdb-config";
import React from "react";
import Image from "next/image";

function MediaCardImage({ posterPath, alt }) {
  let imgSrc;
  if (!posterPath) imgSrc = `/poster-empty.png`;
  else imgSrc = `${imageConfig.baseUrl}w780/${posterPath}`;

  return (
    <Image
      priority
      placeholder="blur"
      blurDataURL="/poster-empty.png"
      alt={`${alt} poster`}
      width={780}
      height={1170}
      className="animate-reveal rounded-sm brightness-75 transition-all duration-100 group-hover:brightness-50 md:brightness-100"
      src={imgSrc}
    />
  );
}

export default MediaCardImage;
