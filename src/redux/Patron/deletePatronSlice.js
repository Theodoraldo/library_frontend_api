import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const deletePatron = createAsyncThunk("deletePatron", async (id) => {
  try {
    const response = await axios.delete(
      `${baseURL}api/v1/library_patrons/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete data");
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
