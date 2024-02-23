import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Genres from "../pages/Admin/Genre";
import LibraryPatron from "../pages/Admin/LibraryPatron";
import Book from "../pages/Admin/Book";
import BorrowedBooks from "../pages/Admin/BorrowedBooks";
import CreateBook from "../pages/Admin/Book/CreateBook";
import CreateGenre from "../pages/Admin/Genre/CreateGenre";
import CreatePatron from "../pages/Admin/Patron/CreatePatron";
import EditGenre from "../pages/Admin/Genre/EditGenre";
import EditPatron from "../pages/Admin/Patron/EditPatron";
import IssueBook from "../pages/Admin/History/IssueBook";
import Attendance from "../pages/Admin/Attendance";

const NavPage = () => {
  return (
    <React.Fragment>
      <section className="bg-white m-4 p-5 rounded">
        <div>
          <Routes>
            <Route path="genres/*" element={<Genres />} />
            <Route path="patrons" element={<LibraryPatron />} />
            <Route path="books" element={<Book />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="book/new" element={<CreateBook />} />
            <Route path="genre/new" element={<CreateGenre />} />
            <Route path="patron/new" element={<CreatePatron />} />
            <Route path="genre/edit/:id" element={<EditGenre />} />
            <Route path="patron/edit/:id" element={<EditPatron />} />
            <Route path="issue_books" element={<IssueBook />} />
            <Route path="due_books" element={<BorrowedBooks />} />
            <Route path="*" element={<Outlet />} />
          </Routes>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
