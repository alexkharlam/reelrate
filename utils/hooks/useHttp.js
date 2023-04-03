import { useCallback, useState } from "react";

export const useHttp = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const makeRequest = useCallback(async function (url, applyData) {
    setIsLoading(true);
    setError(false);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      if (res.ok) applyData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    setError,
    makeRequest,
  };
};
