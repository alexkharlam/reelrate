import MotionTransition from "@/components/Motion/MotionTransition";
import CollectionsCardsList from "@/components/ContentLists/CollectionsCards/CollectionsCardsList";
import PopularMediaSlider from "@/components/PopularMedia/PopularMediaSlider";

export default function Home() {
  return (
    <MotionTransition>
      <PopularMediaSlider type="movie" />
      <PopularMediaSlider type="tv" />
      <CollectionsCardsList />
    </MotionTransition>
  );
}
