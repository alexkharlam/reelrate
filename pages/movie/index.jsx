import Genres from "@/components/contentLists/genres/Genres";
import SliderPopular from "@/components/slider/SliderPopular";

function MoviesPage() {
  return (
    <>
      <SliderPopular type="movie" />
      <div className="px-3">
        <Genres />
      </div>
    </>
  );
}

export default MoviesPage;
