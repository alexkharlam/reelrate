import SliderCollections from "@/components/slider/SliderCollections";
import SliderPopular from "@/components/slider/SliderPopular";

export default function Home() {
  return (
    // <main className="relative h-screen w-full overflow-x-hidden pt-4.5">
    <>
      <SliderPopular type="movie" />
      <SliderPopular type="tv" />
      <SliderCollections />
    </>
    // </main>
  );
}
