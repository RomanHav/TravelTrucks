import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "../redux/itemInfo/slice";

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
  },
});
