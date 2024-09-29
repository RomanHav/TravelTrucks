import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCatalogData = createAsyncThunk(
  "allCatalog/fetchAllCatalogData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch catalog data"
      );
    }
  }
);

export const fetchCatalogById = createAsyncThunk(
  "catalogById/fetchCatalogById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch catalog data by id"
      );
    }
  }
);
