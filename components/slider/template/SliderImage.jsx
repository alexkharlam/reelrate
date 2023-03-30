import Image from "next/image";
import { imageConfig } from "@/utils/config/tmdb-config";

function SliderImage({ content }) {
  let imgSrc = "/backdrop-empty.png";
  if (content.backdropPath)
    imgSrc = imageConfig.baseUrl + "w780" + content.backdropPath;

  return (
    <Image
      priority
      placeholder="blur"
      blurDataURL="/poster-empty.png"
      className="mb-1.5 h-auto w-full transition duration-150 group-hover:brightness-75 md:rounded-sm"
      width={780}
      height={439}
      src={imgSrc}
      alt={`${content.title} poster`}
    />
  );
}

export default SliderImage;
