import { useState } from "react";
import { useEffect } from "react";

import SliderList from "../Slider/SliderList";
import HeadingLink from "../UI/HeadingLink";
import { useHttp } from "@/utils/hooks/useHttp";
import SliderPlaceholder from "../Slider/SliderPlaceholder";
import Message from "../UI/Message";

function PopularMediaSlider({ type }) {
  const [content, setContent] = useState();
  const { makeRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const applyData = (data) => setContent(data.results);

    const fetchData = () => {
      makeRequest(
        `/api/get-content?type=${type}&content=popular&page=1`,
        applyData
      );
    };

    fetchData();
  }, [makeRequest, type]);

  const headingTitle = `Popular ${type === "movie" ? "movies" : "TV shows"}`;

  return (
    <div className="mb-3 px-3 md:mb-3.5 md:px-[0px] md:pl-3">
      <HeadingLink url={`/${type}/popular`} title={headingTitle} />
      {content?.length > 0 && !isLoading && (
        <SliderList seeMoreUrl={`/${type}/popular`} contentArray={content} />
      )}
      {isLoading && <SliderPlaceholder />}
      {error && <Message message="Check your internet connection" />}
    </div>
  );
}

export default PopularMediaSlider;
