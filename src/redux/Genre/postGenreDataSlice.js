import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const postGenre = createAsyncThunk("postGenre", async (genreData) => {
  try {
    const response = await axios.post(`${baseURL}api/v1/genres`, {
      genre_name: genreData.genreName,
      description: genreData.description,
    });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Genre saved successfully!",
    }).then((result) => {
      if (result.isConfirmed) {
        return response.data;
      }
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to save data!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    //throw new Error("Failed to save data");
  }
});

const postGenreSlice = createSlice({
  name: "postGenres",
  initialState: {
    saveGenreData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postGenre.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postGenre.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveGenreData: action.payload,
      }))
      .addCase(postGenre.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postGenreSlice.reducer;
