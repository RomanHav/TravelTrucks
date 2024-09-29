import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCatalogData } from "./operations";
import { fetchCatalogById } from "./operations";
const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalogAllData: [],
    catalogDataById: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCatalogData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCatalogData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalogAllData = action.payload;
      })
      .addCase(fetchAllCatalogData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })

      .addCase(fetchCatalogById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCatalogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalogDataById = action.payload;
      })
      .addCase(fetchCatalogById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default catalogSlice.reducer;
