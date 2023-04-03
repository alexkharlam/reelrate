import { useState } from "react";
import { useHttp } from "@/utils/hooks/useHttp";
import { useEffect } from "react";
import HeadingLink from "@/components/UI/HeadingLink";
import ShowMoreBtn from "@/components/UI/ShowMoreBtn";
import { transformContent } from "@/utils/helpers/transformContent";
import MediaCardsList from "@/components/contentLists/MediaCards/MediaCardsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import Message from "../UI/Message";

function PopularMediaList({ mediaType, mediaTitle }) {
  const [mediaList, setMediaList] = useState([]);
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
      setMediaList((state) => [...state, ...transformedResults]);
    };

    const fetchData = () => {
      makeRequest(
        `/api/get-content?type=${mediaType}&content=popular&page=${pageCount}`,
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
      <HeadingLink url="" title={`Popular ${mediaTitle}`} />
      {mediaList.length > 0 && <MediaCardsList mediaList={mediaList} />}
      {!isMaxPage && !isLoading && <ShowMoreBtn onShowMore={updatePage} />}
      {isLoading && <LoadingSpinner />}
      {error && <Message message="Error loading media" />}
    </div>
  );
}

export default PopularMediaList;
