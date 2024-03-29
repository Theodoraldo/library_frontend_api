import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";
import Swal from "sweetalert2";

export const postAttendance = createAsyncThunk(
  "postAttendance",
  async (attendanceData) => {
    try {
      const response = await axios.post(`${baseURL}api/v1/attendances`, {
        library_patron_id: attendanceData,
        check_in: new Date(),
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Attendance has been saved successfully!",
      }).then((result) => {
        if (result.isConfirmed) {
          return response.data;
        }
      });
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;
        if (responseData.check_engagement) {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: responseData.check_engagement[0],
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
          text: "Could not processed data. Please try again later.",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    }
  }
);

const postAttendanceSlice = createSlice({
  name: "postAttendance",
  initialState: {
    saveAttendanceData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAttendance.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postAttendance.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveAttendanceData: action.payload,
      }))
      .addCase(postAttendance.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postAttendanceSlice.reducer;
