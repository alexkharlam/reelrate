import { useRouter } from "next/router";

import MediaPage from "@/components/MediaDetails/MediaPage";

function MoviePage() {
  const router = useRouter();
  const movieId = router.query.movieId;

  return <MediaPage mediaId={movieId} mediaType="movie" />;
}

export default MoviePage;
