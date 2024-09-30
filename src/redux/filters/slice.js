import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterData } from "./operations";
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterCatalog: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterCatalog = action.payload;
      })
      .addCase(fetchFilterData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default filterSlice.reducer;
