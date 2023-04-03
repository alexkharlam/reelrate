import MotionTransition from "@/components/Motion/MotionTransition";
import MainSearch from "@/components/MainSearch/MainSearch";

function SearchPage() {
  return (
    <MotionTransition className="px-3">
      <MainSearch />
    </MotionTransition>
  );
}

export default SearchPage;
