import { useHoverState } from "@/utils/hooks/useHoverState";
import { useSlider } from "@/utils/hooks/useSlider";
import SliderBtns from "./SliderBtns";
import SliderItem from "./SliderItem";
import SliderSeeMoreBtn from "./SliderSeeMoreBtn";

function SliderList({ seeMoreUrl, contentArray }) {
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
      <ul
        className="slider-scroll flex snap-x snap-mandatory gap-2.5 overflow-x-scroll"
        ref={sliderRef}
        onScroll={scrollHandler}
      >
        {contentArray.map((rawContent) => (
          <SliderItem key={rawContent.id} rawContent={rawContent} />
        ))}
        <SliderSeeMoreBtn url={seeMoreUrl} />
      </ul>
    </div>
  );
}

export default SliderList;
