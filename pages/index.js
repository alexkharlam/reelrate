import Seo from "@/components/seo/Seo";
import SliderCollections from "@/components/slider/SliderCollections";
import SliderPopular from "@/components/slider/SliderPopular";
import HiMessage from "@/components/UI/messages/HiMessage";

export default function Home() {
  return (
    // <main className="relative h-screen w-full overflow-x-hidden pt-4.5">
    <>
      <Seo
        title="Home - Reelrate"
        description="Search movies and TV shows, rate them and add to watch list"
      />
      <SliderPopular type="movie" />
      <SliderPopular type="tv" />
      <SliderCollections />
    </>
    // </main>
  );
}
