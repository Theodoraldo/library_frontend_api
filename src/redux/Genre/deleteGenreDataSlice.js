import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const deleteGenre = createAsyncThunk("deleteGenre", async (id) => {
  try {
    const response = await axios.delete(`${baseURL}api/v1/genres/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete data");
  }
});

const deleteGenreSlice = createSlice({
  name: "deleteGenres",
  initialState: {
    deleteGenreData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteGenre.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteGenre.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        deleteGenreData: action.payload,
      }))
      .addCase(deleteGenre.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default deleteGenreSlice.reducer;
