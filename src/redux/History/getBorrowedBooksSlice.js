import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchBorrowedBook = createAsyncThunk(
  "getBorrowedBooks",
  async () => {
    try {
      const response = await axios.get(`${baseURL}api/v1/borrow_histories`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get borrow books records");
    }
  }
);

const getBorrowedBookSlice = createSlice({
  name: "getBorrowedBook",
  initialState: {
    getAllBorrowedData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBorrowedBook.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchBorrowedBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getAllBorrowedData: action.payload,
      }))
      .addCase(fetchBorrowedBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getBorrowedBookSlice.reducer;
