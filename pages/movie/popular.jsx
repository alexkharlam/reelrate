import { useState } from "react";
import { useHttp } from "@/utils/hooks/use-http";
import { useEffect } from "react";
import HeadingLink from "@/components/UI/HeadingLink";
import ShowMoreBtn from "@/components/UI/ShowMoreBtn";
import { transformContent } from "@/utils/helpers/transformContent";
import ContentList from "@/components/contentLists/content/ContentList";

function PopularMovies() {
  const [content, setContent] = useState([]);
  const { makeRequest, isLoading, error } = useHttp();
  const [pageCount, setPageCount] = useState(1);
  const [isMaxPage, setIsMaxPage] = useState(false);

  useEffect(() => {
    const applyData = (data) => {
      const maxPage = data.total_pages;
      if (pageCount === maxPage) setIsMaxPage(true);

      const transformedResults = data.results.map((res) =>
        transformContent(res)
      );
      setContent((state) => [...state, ...transformedResults]);
    };

    const fetchData = () => {
      makeRequest(
        `/api/get-content?type=movie&content=popular&page=${pageCount}`,
        applyData
      );
    };

    fetchData();
  }, [makeRequest, pageCount]);

  const updatePage = () => {
    setPageCount((state) => ++state);
  };

  return (
    <div className="px-3">
      <HeadingLink url="" title={`Popular movies`} />
      {content.length > 0 && <ContentList listItems={content} />}
      {!isMaxPage && <ShowMoreBtn onShowMore={updatePage} />}
    </div>
  );
}

export default PopularMovies;
