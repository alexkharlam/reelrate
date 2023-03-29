import InfoItem from "./InfoItem";
import MovieBlock from "./MovieBlock";
import TvBlock from "./TvBlock";

function InfoBlock({ content }) {
  return (
    <ul className="flex flex-col gap-1.5">
      <InfoItem title="Average vote (tmdb)" content={content.averageVote} />
      {content.mediaType === "tv" && <TvBlock content={content} />}
      {content.mediaType === "movie" && <MovieBlock content={content} />}
    </ul>
  );
}

export default InfoBlock;
