import { configureStore } from "@reduxjs/toolkit";

import ratesSlice from "./rates-slice";
import collectionsSlice from "./collections-slice";

const store = configureStore({
  reducer: { rates: ratesSlice.reducer, collections: collectionsSlice.reducer },
});

export default store;
