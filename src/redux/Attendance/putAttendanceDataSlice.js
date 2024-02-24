import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const putAttendance = createAsyncThunk(
  "putAttendance",
  async (attendanceRecord) => {
    try {
      const response = await axios.put(
        `${baseURL}api/v1/attendances/${attendanceRecord.id}`,
        {
          check_out: new Date(),
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Patron checkout succeeded!",
      }).then((result) => {
        if (result.isConfirmed) {
          return response.data;
        }
      });
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        if (errorData.check_out) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: errorData.check_out[0],
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
  }
);

const putAttendanceSlice = createSlice({
  name: "putAttendance",
  initialState: {
    saveAttendanceRecord: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(putAttendance.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(putAttendance.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveAttendanceRecord: action.payload,
      }))
      .addCase(putAttendance.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default putAttendanceSlice.reducer;
