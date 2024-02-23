import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const fetchAllAttendance = createAsyncThunk(
  "getAllAttendance",
  async () => {
    try {
      const response = await axios.get(`${baseURL}api/v1/attendances`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get all books data");
    }
  }
);

const getAllAttendanceSlice = createSlice({
  name: "getAllAttendances",
  initialState: {
    getAllAttendanceData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAttendance.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchAllAttendance.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        getAllAttendanceData: action.payload,
      }))
      .addCase(fetchAllAttendance.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default getAllAttendanceSlice.reducer;
