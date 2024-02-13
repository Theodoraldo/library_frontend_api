import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const updateGenre = createAsyncThunk(
  "updateGenre",
  async (updateGenre) => {
    try {
      const response = await axios.put(
        `${baseURL}api/v1/genres/${updateGenre.genreId}`,
        {
          genre_name: updateGenre.genreName,
          description: updateGenre.description,
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Genre updated successfully!",
      }).then((result) => {
        if (result.isConfirmed) {
          return response.data;
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update record!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      // throw new Error("Failed to update data");
    }
  }
);

const updateGenreSlice = createSlice({
  name: "updateGenres",
  initialState: {
    updateGenreData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateGenre.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(updateGenre.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        updateGenreData: action.payload,
      }))
      .addCase(updateGenre.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default updateGenreSlice.reducer;
