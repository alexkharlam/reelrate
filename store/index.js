import { configureStore } from "@reduxjs/toolkit";

import collectionsSlice from "./collections-slice";

const store = configureStore({
  reducer: { collections: collectionsSlice.reducer },
});

export default store;
