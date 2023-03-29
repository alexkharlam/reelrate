import { imageConfig } from "@/utils/config/tmdb-config";

function BgImg({ backdropPath }) {
  const imgSrc = `${imageConfig.baseUrl}/original/${backdropPath}`;

  return (
    <img
      src={imgSrc}
      className="fixed left-[0px] top-[0px] -z-10 h-screen w-full object-cover opacity-20"
    />
  );
}

export default BgImg;
