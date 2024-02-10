import { configureStore } from "@reduxjs/toolkit";
import getAllGenreSlice from "./Genre/getGenreDataSlice.js";
import getAllBookSlice from "./Book/getBookDataSlice.js";
import getOneGenreSlice from "./Genre/getOneGenreSlice.js";

const store = configureStore({
  reducer: {
    getAllGenres: getAllGenreSlice,
    getAllBooks: getAllBookSlice,
    getOneGenre: getOneGenreSlice,
  },
});

export default store;
