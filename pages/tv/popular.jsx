import MotionTransition from "@/components/Motion/MotionTransition";
import PopularMediaList from "@/components/PopularMedia/PopularMediaList";

function PopularTvShowsPage() {
  return (
    <MotionTransition>
      <PopularMediaList mediaTitle="Tv shows" mediaType="tv" />
    </MotionTransition>
  );
}

export default PopularTvShowsPage;
