import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

export const postPatron = createAsyncThunk("postPatron", async (patronData) => {
  try {
    const response = await axios.post(`${baseURL}api/v1/library_patrons`, {
      address: patronData.address,
      city: patronData.city,
      contact: patronData.contact,
      email: patronData.email,
      firstname: patronData.firstName,
      identity_card: patronData.identityCard,
      identity_no: patronData.identityNo,
      lastname: patronData.lastName,
      location: patronData.location,
      state: patronData.state,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to save library patron's data");
  }
});

const postPotronSlice = createSlice({
  name: "postPatrons",
  initialState: {
    savePatronData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postPatron.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postPatron.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        savePatronData: action.payload,
      }))
      .addCase(postPatron.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postPotronSlice.reducer;
