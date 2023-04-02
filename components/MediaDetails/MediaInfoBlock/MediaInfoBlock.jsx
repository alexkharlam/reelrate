import MediaInfoItem from "./MediaInfoItem";
import MovieInfoBlock from "./MovieInfoBlock";
import TvShowInfoBlock from "./TvShowInfoBlock";

function MediaInfoBlock({ content }) {
  return (
    <ul className="flex flex-col gap-1.5">
      <MediaInfoItem
        title="Average vote (tmdb)"
        content={content.averageVote}
      />
      {content.mediaType === "tv" && <TvShowInfoBlock content={content} />}
      {content.mediaType === "movie" && <MovieInfoBlock content={content} />}
    </ul>
  );
}

export default MediaInfoBlock;
