import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const usePageLoading = function () {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState();

  const handleRouteChangeStart = () => setIsLoading(true);
  const handleRouteChangeComplete = () => setIsLoading(false);
  const handleRouteChangeError = () => setIsLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return isLoading;
};
