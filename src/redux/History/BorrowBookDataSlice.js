import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const postIssueBook = createAsyncThunk(
  "postIssueBook",
  async (issueData) => {
    try {
      const response = await axios.post(`${baseURL}api/v1/borrow_histories`, {
        borrow_date: issueData.borrowDate,
        user_id: issueData.userId,
        library_patron_id: issueData.patronId,
        book_id: issueData.bookId,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Book has successfully been issue to the reader!",
      }).then((result) => {
        if (result.isConfirmed) {
          return response.data;
        }
      });
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;
        if (responseData.base) {
          Swal.fire({
            icon: "error",
            title: "Ow nooo!",
            text: responseData.base[0],
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
        if (responseData.borrow_date) {
          Swal.fire({
            icon: "error",
            title: "Ow Error in dates!",
            text: responseData.borrow_date[0],
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

const postIssueBookSlice = createSlice({
  name: "postIssueBook",
  initialState: {
    saveHistoryData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postIssueBook.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postIssueBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveHistoryData: action.payload,
      }))
      .addCase(postIssueBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postIssueBookSlice.reducer;
