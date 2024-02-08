import { configureStore } from "@reduxjs/toolkit";
import getAllGenreSlice from "./Genre/getGenreDataSlice.js";
import getAllBookSlice from "./Book/getBookDataSlice.js";

const store = configureStore({
  reducer: {
    getAllGenres: getAllGenreSlice,
    getAllBooks: getAllBookSlice,
  },
});

export default store;
