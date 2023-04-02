import { useEffect, useState } from "react";

import { useHttp } from "@/utils/hooks/use-http";
import { transformContent } from "@/utils/helpers/transformContent";

import MediaDetails from "./MediaDetails";
import Message from "../UI/Message";
import LoadingSpinner from "../UI/LoadingSpinner";

function MediaPage({ mediaType, mediaId }) {
  const [mediaData, setMediaData] = useState();
  const { makeRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const applyData = (data) => {
      const transformedData = transformContent(data);
      setMediaData(transformedData);
    };

    if (mediaId) {
      makeRequest(
        `/api/get-content?type=${mediaType}&content=${mediaId}`,
        applyData
      );
    }
  }, [makeRequest, mediaId]);

  return (
    <>
      {mediaData && <MediaDetails mediaData={mediaData} />}
      {isLoading && <LoadingSpinner />}
      {error && (
        <Message message="Error loading content. Check your internet connection" />
      )}
    </>
  );
}

export default MediaPage;
