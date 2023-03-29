export const findCollections = function (rates, watchList, item) {
  const exRate = watchList.find((watchItem) => watchItem.id === item.id);
  const exWatchList = rates.find((rate) => rate.id === item.id);

  return { exRate, exWatchList };
};
