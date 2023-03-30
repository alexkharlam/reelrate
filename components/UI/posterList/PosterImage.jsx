import { imageConfig } from "@/utils/config/tmdb-config";
import React from "react";

function PosterImage({ posterPath }) {
  let imgSrc;
  if (!posterPath) imgSrc = `/poster-empty.png`;
  else imgSrc = `${imageConfig.baseUrl}w780/${posterPath}`;

  return (
    <img
      className="rounded-sm brightness-75 transition-all duration-100 group-hover:brightness-50 md:brightness-100"
      src={imgSrc}
    />
  );
}

export default PosterImage;
