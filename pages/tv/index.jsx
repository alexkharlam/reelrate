import GenreCardsList from "@/components/contentLists/GenreCards/GenreCardsList";
import PopularMediaSlider from "@/components/PopularMedia/PopularMediaSlider";
function TvShowsPage() {
  return (
    <>
      <PopularMediaSlider type="tv" />
      <div className="px-3">
        <GenreCardsList />
      </div>
    </>
  );
}

export default TvShowsPage;
