import { imageConfig } from "@/utils/config/tmdb-config";
import React from "react";

function PosterImage({ posterPath }) {
  let imgSrc;
  if (!posterPath) imgSrc = `/poster-empty.png`;
  else imgSrc = `${imageConfig.baseUrl}w780/${posterPath}`;

  return (
    <img
      className="rounded-sm transition-all duration-100 group-hover:brightness-50"
      src={imgSrc}
    />
  );
}

export default PosterImage;
