import { configureStore } from "@reduxjs/toolkit";
import getAllGenreSlice from "./Genre/getGenreDataSlice.js";
import getAllBookSlice from "./Book/getBookDataSlice.js";
import getOneGenreSlice from "./Genre/getOneGenreSlice.js";
import getAllPatronSlice from "./Patron/getPatronDataSlice.js";
import getOnePatronSlice from "./Patron/getOnePatronSlice.js";

const store = configureStore({
  reducer: {
    getAllGenres: getAllGenreSlice,
    getAllBooks: getAllBookSlice,
    getOneGenre: getOneGenreSlice,
    getAllPatrons: getAllPatronSlice,
    getOnePatron: getOnePatronSlice,
  },
});

export default store;
