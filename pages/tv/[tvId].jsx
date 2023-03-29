import ContentPage from "@/components/contentPage/ContentPage";
import { useHttp } from "@/utils/hooks/use-http";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function TvShowPage() {
  const router = useRouter();
  const tv = router.query.tvId;
  const [content, setContent] = useState();
  const { makeRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const applyData = (data) => setContent(data);

    if (tv) {
      makeRequest(`/api/get-content?type=tv&content=${tv}`, applyData);
    }
  }, [makeRequest, tv]);

  return (
    <main className="relative">
      {content && <ContentPage rawContent={content} />}
    </main>
  );
}

export default TvShowPage;
