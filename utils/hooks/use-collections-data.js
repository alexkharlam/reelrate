import { useSelector } from "react-redux";

export const useCollectionsData = function () {
  const rates = useSelector((state) => state.collections.rates);
  const watchList = useSelector((state) => state.collections.watchList);

  return {
    rates,
    watchList,
  };
};
