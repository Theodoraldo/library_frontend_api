import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchAllGenre = createAsyncThunk(
  "getAllGenreDetails",
  async () => {
    try {
      const response = await axios.get(`${baseURL}api/v1/genres`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get all genres data");
    }
  }
);

const getAllGenreSlice = createSlice({
  name: "getAllGenres",
  initialState: {
    getAllGenreData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGenre.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchAllGenre.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getAllGenreData: action.payload,
      }))
      .addCase(fetchAllGenre.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getAllGenreSlice.reducer;
