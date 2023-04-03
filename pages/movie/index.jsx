import MotionTransition from "@/components/Motion/MotionTransition";
import GenreCardsList from "@/components/contentLists/GenreCards/GenreCardsList";
import PopularMediaSlider from "@/components/PopularMedia/PopularMediaSlider";
function MoviesPage() {
  return (
    <MotionTransition>
      <PopularMediaSlider type="movie" />
      <div className="px-3">
        <GenreCardsList />
      </div>
    </MotionTransition>
  );
}

export default MoviesPage;
