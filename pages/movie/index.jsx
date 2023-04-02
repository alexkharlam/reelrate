import GenreCardsList from "@/components/contentLists/GenreCards/GenreCardsList";
import PopularMediaSlider from "@/components/PopularMedia/PopularMediaSlider";
function MoviesPage() {
  return (
    <>
      <PopularMediaSlider type="movie" />
      <div className="px-3">
        <GenreCardsList />
      </div>
    </>
  );
}

export default MoviesPage;
