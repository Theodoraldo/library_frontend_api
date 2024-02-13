import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const deleteGenre = createAsyncThunk("deleteGenre", async (id) => {
  try {
    const response = await axios.delete(`${baseURL}api/v1/genres/${id}`);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Genre deleted successfully!",
    }).then((result) => {
      if (result.isConfirmed) {
        return response.data;
      }
    });
  } catch (error) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Failed to delete genre. It may be in use! Referential integrity!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    //throw new Error("Failed to delete data");
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
