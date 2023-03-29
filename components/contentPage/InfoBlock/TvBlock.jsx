import InfoItem from "./InfoItem";

function TvBlock({ content }) {
  return (
    <>
      <InfoItem title="Type" content={"TV show"} />
      <InfoItem
        title="First Air Date"
        content={content.releaseDate.slice(0, 4)}
      />
      <InfoItem title="Total seasons" content={content.numberOfSeasons} />
      <InfoItem title="Total episodes" content={content.numberOfEpisodes} />
      <InfoItem
        title="Status"
        content={content.inProduction ? "In production" : "Finished"}
      />
    </>
  );
}

export default TvBlock;
