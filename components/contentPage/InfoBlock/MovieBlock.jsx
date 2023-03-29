import InfoItem from "./InfoItem";

function MovieBlock({ content }) {
  return (
    <>
      <InfoItem title="Type" content={"Movie"} />
      <InfoItem
        title="Release Date"
        content={content.releaseDate.slice(0, 4)}
      />
      <InfoItem title="Duration" content={`${content.runtime} minutes`} />
      <InfoItem title="Status" content={content.status} />
    </>
  );
}

export default MovieBlock;
