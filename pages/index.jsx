import CollectionsCardsList from "@/components/ContentLists/CollectionsCards/CollectionsCardsList";
import PopularMediaSlider from "@/components/PopularMedia/PopularMediaSlider";

export default function Home() {
  return (
    <>
      <PopularMediaSlider type="movie" />
      <PopularMediaSlider type="tv" />
      <CollectionsCardsList />
    </>
  );
}
