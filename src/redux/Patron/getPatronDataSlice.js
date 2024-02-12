import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchAllPatrons = createAsyncThunk(
  "getAllPatronDetails",
  async () => {
    try {
      const response = await axios.get(`${baseURL}api/v1/library_patrons`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get patrons data");
    }
  }
);

const getAllPatronSlice = createSlice({
  name: "getAllPatrons",
  initialState: {
    getAllPatronData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPatrons.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchAllPatrons.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getAllPatronData: action.payload,
      }))
      .addCase(fetchAllPatrons.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getAllPatronSlice.reducer;
