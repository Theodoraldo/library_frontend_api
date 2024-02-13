import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

const postBook = createAsyncThunk("postBook", async (bookData) => {
  console.log("BookData", bookData);

  if (!bookData.image) {
    throw new Error("Invalid image File");
  }

  try {
    const response = await axios.post(`${baseURL}api/v1/books`, {
      book: {
        title: bookData.title,
        author: bookData.author,
        published_date: bookData.published_date,
        available_copies: bookData.available_copies,
        pages: bookData.pages,
        note: bookData.note,
        genre_id: bookData.genre_id,
        image_path: bookData.image,
        removed: bookData.removed,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to save data");
  }
});

const postBookDataSlice = createSlice({
  name: "postBooks",
  initialState: {
    saveBookData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(postBook.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        saveBookData: action.payload,
      }))
      .addCase(postBook.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default postBookDataSlice.reducer;
export { postBook };
