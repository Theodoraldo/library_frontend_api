import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchAllBook = createAsyncThunk("getAllBookDetails", async () => {
  try {
    const response = await axios.get(`${baseURL}api/v1/books`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to get all books data");
  }
});

const getAllBookSlice = createSlice({
  name: "getAllBooks",
  initialState: {
    getAllBookData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBook.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchAllBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getAllBookData: action.payload,
      }))
      .addCase(fetchAllBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getAllBookSlice.reducer;
