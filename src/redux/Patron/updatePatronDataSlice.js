import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const updatePatron = createAsyncThunk(
  "updatePatron",
  async (updatePatron) => {
    try {
      const response = await axios.put(
        `${baseURL}api/v1/library_patrons/${updatePatron.patronId}`,
        {
          firstname: updatePatron.firstName,
          lastname: updatePatron.lastName,
          email: updatePatron.email,
          contact: updatePatron.contact,
          location: updatePatron.location,
          city: updatePatron.city,
          state: updatePatron.state,
          address: updatePatron.address,
          identity_card: updatePatron.identityCard,
          identity_no: updatePatron.identityNo,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update data");
    }
  }
);

const updatePatronSlice = createSlice({
  name: "updatePatron",
  initialState: {
    updatePatronData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePatron.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(updatePatron.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        updatePatronData: action.payload,
      }))
      .addCase(updatePatron.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default updatePatronSlice.reducer;
