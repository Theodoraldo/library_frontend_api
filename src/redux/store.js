import { configureStore } from "@reduxjs/toolkit";
import getAllGenreSlice from "./Genre/getGenreDataSlice.js";
import getAllBookSlice from "./Book/getBookDataSlice.js";
import postBookDataSlice from "./Book/postBookDataSlice.js";
import getOneGenreSlice from "./Genre/getOneGenreSlice.js";
import getAllPatronSlice from "./Patron/getPatronDataSlice.js";
import getOnePatronSlice from "./Patron/getOnePatronSlice.js";
import getAllBorrowedBooksSlice from "./History/getBorrowedBooksSlice.js";
import getAttendanceDataSlice from "./Attendance/getAttendanceDataSlice.js";

const store = configureStore({
  reducer: {
    getAllGenres: getAllGenreSlice,
    getAllBooks: getAllBookSlice,
    postBookData: postBookDataSlice,
    getOneGenre: getOneGenreSlice,
    getAllPatrons: getAllPatronSlice,
    getOnePatron: getOnePatronSlice,
    getAllBorrowed: getAllBorrowedBooksSlice,
    getAllAttendance: getAttendanceDataSlice,
  },
});

export default store;
