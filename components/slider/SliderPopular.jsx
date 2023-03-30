import { useState } from "react";
import { useEffect } from "react";

import Slider from "./template/Slider";
import HeadingLink from "../UI/HeadingLink";
import { useHttp } from "@/utils/hooks/use-http";
import PlaceHolder from "./template/PlaceHolder";
import ErrorLoading from "../UI/loadingStates/ErrorLoading";

function SliderPopular({ type }) {
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
  }, [makeRequest]);

  const headingTitle = `Popular ${type === "movie" ? "movies" : "TV shows"}`;

  return (
    <div className="mb-2.5 px-3 md:mb-3.5 md:px-[0px] md:pl-3">
      <HeadingLink url={`/${type}/popular`} title={headingTitle} />
      {content?.length > 0 && !isLoading && (
        <Slider seeMoreUrl={`/${type}/popular`} contentArray={content} />
      )}
      {isLoading && <PlaceHolder />}
      {error && <ErrorLoading message="Check your internet connection" />}
    </div>
  );
}

export default SliderPopular;
