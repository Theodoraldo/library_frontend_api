import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const postReturnBook = createAsyncThunk(
  "postReturns",
  async (returnBookData) => {
    try {
      const response = await axios.put(
        `${baseURL}api/v1/borrow_histories/${returnBookData.id}`,
        {
          returned_date: returnBookData.returnDate,
          book_state: returnBookData.bookState,
          comment: returnBookData.comment,
          instore: true,
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Borrowed Book has been returned!",
      }).then((result) => {
        if (result.isConfirmed) {
          return response.data;
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Returning of book has failed!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }
);

const postBookReturnSlice = createSlice({
  name: "postReturns",
  initialState: {
    saveReturnsData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReturnBook.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postReturnBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveReturnsData: action.payload,
      }))
      .addCase(postReturnBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postBookReturnSlice.reducer;
