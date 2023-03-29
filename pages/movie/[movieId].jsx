import { useRouter } from "next/router";
import { useState } from "react";
import { useHttp } from "@/utils/hooks/use-http";
import { useEffect } from "react";

import ContentPage from "@/components/contentPage/ContentPage";
import LoadingResults from "@/components/UI/loadingStates/LoadingResults";
import ErrorLoading from "@/components/UI/loadingStates/ErrorLoading";

function MoviePage() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [content, setContent] = useState();
  const { makeRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const applyData = (data) => setContent(data);

    if (movieId) {
      makeRequest(`/api/get-content?type=movie&content=${movieId}`, applyData);
    }
  }, [makeRequest, movieId]);

  return (
    <>
      {content && <ContentPage rawContent={content} />}
      {isLoading && <LoadingResults />}
      {error && (
        <ErrorLoading message="Error loading content. Check your internet connection" />
      )}
    </>
  );
}

export default MoviePage;
