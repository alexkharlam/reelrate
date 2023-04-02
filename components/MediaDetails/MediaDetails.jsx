import MediaBackground from "./MediaBackground";
import MediaCollectionsBtns from "./MediaCollectionsBtns/MediaCollectionsBtns";
import MediaInfoBlock from "./MediaInfoBlock/MediaInfoBlock";

function MediaDetails({ mediaData }) {
  return (
    <section className="px-3">
      <h1 className="mb-3 text-2xl font-bold md:text-4xl lg:text-6xl">
        {mediaData.title}
      </h1>
      <MediaCollectionsBtns content={mediaData} />
      <p className="mb-3 max-w-3xl text-base text-white">
        {mediaData.overview}
      </p>
      <MediaBackground content={mediaData} />
      <MediaInfoBlock content={mediaData} />
    </section>
  );
}

export default MediaDetails;
