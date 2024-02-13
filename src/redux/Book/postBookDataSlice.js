import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../baseURL";

const postBook = createAsyncThunk("postBook", async (bookData) => {
  console.log("BookData", bookData);

  let image;
  if (bookData.image_path && bookData.image_path instanceof File) {
    // Convert the image file to a Base64 string
    image = await toBase64(bookData.image_path).catch((error) => {
      console.error("Failed to convert image to Base64:", error);
      throw new Error("Failed to convert image to Base64");
    });

    // Rest of your code...
  } else {
    throw new Error("Invalid image file");
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
        image_path: image,
        removed: bookData.removed,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to save data");
  }
});

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

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
