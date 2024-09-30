import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "../redux/itemInfo/slice";
import filterSlice from "../redux/filters/slice";

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    filter: filterSlice,
    pagination: catalogSlice,
  },
});
