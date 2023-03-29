import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "rates",
  initialState: { rates: [], watchList: [] },
  reducers: {
    initCollections(state, { payload }) {
      state.rates = payload.rates;
      state.watchList = payload.watchList;
    },

    addToState(state, { payload }) {
      if (payload.collection === "rates") state.rates = payload.content;
      if (payload.collection === "watchList") state.watchList = payload.content;
    },

    removeFromState(state, { payload }) {
      if (payload.collection === "rates")
        state.rates = state.rates.filter((rate) => rate.id !== payload.id);
      if (payload.collection === "watchList")
        state.watchList = state.watchList.filter((li) => li.id !== payload.id);
    },
  },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;

export const addToCollection = function (collection, content) {
  return function (dispatch) {
    // getting local storage collection
    let existingList = JSON.parse(localStorage.getItem(collection));
    if (!existingList) existingList = [];
    // if it's already a item
    const previousItem = existingList.findIndex(
      (item) => item.id === content.id
    );
    if (previousItem !== -1) {
      existingList[previousItem] = content;
    } else {
      existingList.unshift(content);
    }

    // adding to local storage
    const collectionString = JSON.stringify(existingList);
    localStorage.setItem(collection, collectionString);

    dispatch(
      collectionsActions.addToState({ collection, content: existingList })
    );
  };
};

export const deleteFromCollection = function (collection, id) {
  return function (dispatch) {
    dispatch(collectionsActions.removeFromState({ collection, id }));

    let existingList = JSON.parse(localStorage.getItem(collection));
    const newList = existingList.filter((rate) => rate.id !== id);

    const ratesString = JSON.stringify(newList);
    localStorage.setItem(collection, ratesString);
  };
};
