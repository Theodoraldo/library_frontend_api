import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchOnePatron = createAsyncThunk(
  "getOnePatronDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `${baseURL}api/v1/library_patrons/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to get the genre data");
    }
  }
);

const getOnePatronSlice = createSlice({
  name: "getOnePatron",
  initialState: {
    getOnePatronData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnePatron.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchOnePatron.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getOnePatronData: action.payload,
      }))
      .addCase(fetchOnePatron.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getOnePatronSlice.reducer;
