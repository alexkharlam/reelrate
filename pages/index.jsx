import SliderCollections from "@/components/slider/SliderCollections";
import SliderPopular from "@/components/slider/SliderPopular";

export default function Home() {
  return (
    <>
      <SliderPopular type="movie" />
      <SliderPopular type="tv" />
      <SliderCollections />
    </>
  );
}
