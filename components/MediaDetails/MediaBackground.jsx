import { imageConfig } from "@/utils/config/tmdb-config";
import Image from "next/image";

function MediaBackground({ content }) {
  let imgSrc;
  if (content.backdropPath)
    imgSrc = `${imageConfig.baseUrl}/w1280/${content.backdropPath}`;

  if (imgSrc)
    return (
      <Image
        src={imgSrc}
        alt={`${content.title} poster`}
        width={1280}
        height={720}
        className="fixed left-[0px] top-[0px] -z-10 h-screen w-full object-cover opacity-20"
      />
    );
}

export default MediaBackground;
