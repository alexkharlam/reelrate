import MotionTransition from "@/components/Motion/MotionTransition";
import PopularMediaList from "@/components/PopularMedia/PopularMediaList";

function PopularMoviesPage() {
  return (
    <MotionTransition>
      <PopularMediaList mediaTitle="movies" mediaType="movie" />
    </MotionTransition>
  );
}

export default PopularMoviesPage;
