import { useRouter } from "next/router";

import MediaPage from "@/components/MediaDetails/MediaPage";

function TvShowPage() {
  const router = useRouter();
  const tvId = router.query.tvId;

  return <MediaPage mediaId={tvId} mediaType="tv" />;
}

export default TvShowPage;
