import { useHoverState } from "@/utils/hooks/use-hover-state";
import { useSlider } from "@/utils/hooks/use-slider";
import SliderBtns from "./SliderBtns";
import SliderItem from "./SliderItem";
import SeeMoreBtn from "./SeeMoreBtn";

function Slider({ seeMoreUrl, contentArray }) {
  const { sliderRef, isBtnsActive, scrollIn, scrollHandler } = useSlider();
  const { isHovered, hoverHandler, blurHandler } = useHoverState();

  return (
    <div
      className="relative w-full"
      onMouseEnter={hoverHandler}
      onMouseLeave={blurHandler}
    >
      {isHovered && (
        <SliderBtns isActive={isBtnsActive} onScrollClick={scrollIn} />
      )}
      <div
        className="slider-scroll flex snap-x snap-mandatory gap-2.5 overflow-x-scroll"
        ref={sliderRef}
        onScroll={scrollHandler}
      >
        {contentArray.map((rawContent) => (
          <SliderItem key={rawContent.id} rawContent={rawContent} />
        ))}
        <SeeMoreBtn url={seeMoreUrl} />
      </div>
    </div>
  );
}

export default Slider;
