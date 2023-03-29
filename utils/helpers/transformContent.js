export const transformContent = function (content) {
  let genreIds;
  let type;
  if (content.original_title) type = "movie";
  if (content.original_name) type = "tv";

  if (content?.genre_ids) {
    genreIds = content.genre_ids;
  }
  if (content?.genres) {
    genreIds = content.genres.map((genre) => genre.id);
  }

  const overallContent = {
    posterPath: content?.poster_path ?? "",
    backdropPath: content?.backdrop_path ?? "",
    overview: content?.overview ?? "",
    genreIds,
    id: content.id,
    tagline: content?.tagline ?? "",
    averageVote: content?.vote_average ?? "",
    status: content?.status ?? "",
    mediaType: type,
  };

  if (type === "movie") {
    return {
      ...overallContent,
      title: content.original_title,
      releaseDate: content?.release_date ?? "",
      revenue: content?.revenue ?? "",
      runtime: content?.runtime ?? "",
    };
  }
  if (type === "tv") {
    return {
      ...overallContent,
      title: content?.original_name ?? "",
      episodeDuration: content?.episode_run_time ?? "",
      releaseDate: content?.first_air_date ?? "",
      lastAirDate: content?.last_air_date ?? "",
      numberOfSeasons: content?.number_of_seasons ?? "",
      numberOfEpisodes: content?.number_of_episodes ?? "",
      inProduction: content?.in_production ?? "",
    };
  }
};
