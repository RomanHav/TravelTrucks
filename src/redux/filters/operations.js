import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchFilterData = createAsyncThunk(
  "filterACData/fetchFilterACData",
  async ({ filterParam, valueParam }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?${filterParam}=${valueParam}`);

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch catalog data"
      );
    }
  }
);
