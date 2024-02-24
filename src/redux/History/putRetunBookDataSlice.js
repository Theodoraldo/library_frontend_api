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
      if (error.response) {
        const responseData = error.response.data;
        if (responseData.returned_date) {
          Swal.fire({
            icon: "error",
            title: "Ow Error in dates!",
            text: "Return date of book cannot be in the past!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Returning of book has failed!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Ow network error!",
          text: "A network error occurred. Please try again later.",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ow nooo!",
          text: "An unexpected error occurred. Please try again later.",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
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
