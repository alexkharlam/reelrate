import { imageConfig } from "@/utils/config/tmdb-config";
import Image from "next/image";
import { MotionRevealDiv } from "../Motion/MotionReveal";

function MediaBackground({ content }) {
  let imgSrc;
  if (content.backdropPath)
    imgSrc = `${imageConfig.baseUrl}/w1280/${content.backdropPath}`;

  if (imgSrc)
    return (
      <MotionRevealDiv
        duration="1"
        className="fixed left-[0px] top-[0px] -z-10 h-screen w-full"
      >
        <Image
          src={imgSrc}
          alt={`${content.title} poster`}
          width={1280}
          height={720}
          className="h-full w-full object-cover opacity-20"
        />
      </MotionRevealDiv>
    );
}

export default MediaBackground;
