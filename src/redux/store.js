import { configureStore } from "@reduxjs/toolkit";
import getAllGenreSlice from "./Genre/getGenreDataSlice.js";
import getAllBookSlice from "./Book/getBookDataSlice.js";
import postBookDataSlice from "./Book/postBookDataSlice.js";

const store = configureStore({
  reducer: {
    getAllGenres: getAllGenreSlice,
    getAllBooks: getAllBookSlice,
    postBookData: postBookDataSlice,
  },
});

export default store;
