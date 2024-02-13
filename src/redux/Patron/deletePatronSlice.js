import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const deletePatron = createAsyncThunk("deletePatron", async (id) => {
  try {
    const response = await axios.delete(
      `${baseURL}api/v1/library_patrons/${id}`
    );
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Library Patron deleted successfully!",
    }).then((result) => {
      if (result.isConfirmed) {
        return response.data;
      }
    });
  } catch (error) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Failed to delete patron. It may be in use! Referential integrity!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    // throw new Error("Failed to delete data");
  }
});

const deletePatronSlice = createSlice({
  name: "deletePatrons",
  initialState: {
    deletePatronData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePatron.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deletePatron.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        deletePatronData: action.payload,
      }))
      .addCase(deletePatron.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default deletePatronSlice.reducer;
