import { useRouter } from "next/router";

import MediaPage from "@/components/MediaDetails/MediaPage";
import MotionTransition from "@/components/Motion/MotionTransition";

function TvShowPage() {
  const router = useRouter();
  const tvId = router.query.tvId;

  return (
    <MotionTransition>
      <MediaPage mediaId={tvId} mediaType="tv" />
    </MotionTransition>
  );
}

export default TvShowPage;
