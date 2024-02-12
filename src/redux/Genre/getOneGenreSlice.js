import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchOneGenre = createAsyncThunk(
  "getOneGenreDetails",
  async (id) => {
    try {
      const response = await axios.get(`${baseURL}api/v1/genres/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get the genre data");
    }
  }
);

const getOneGenreSlice = createSlice({
  name: "getOneGenre",
  initialState: {
    getOneGenreData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneGenre.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchOneGenre.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getOneGenreData: action.payload,
      }))
      .addCase(fetchOneGenre.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getOneGenreSlice.reducer;
