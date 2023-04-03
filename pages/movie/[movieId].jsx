import { useRouter } from "next/router";

import MediaPage from "@/components/MediaDetails/MediaPage";
import MotionTransition from "@/components/Motion/MotionTransition";

function MoviePage() {
  const router = useRouter();
  const movieId = router.query.movieId;

  return (
    <MotionTransition>
      <MediaPage mediaId={movieId} mediaType="movie" />
    </MotionTransition>
  );
}

export default MoviePage;
