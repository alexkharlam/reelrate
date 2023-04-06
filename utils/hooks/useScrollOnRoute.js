import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const useScrollOnRoute = function () {
  const elementRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (elementRef) elementRef.current.scrollTo({ top: 0 });
  }, [router.pathname]);

  return elementRef;
};
