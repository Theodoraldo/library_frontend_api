import React from "react";
import { Route, Routes } from "react-router-dom";
import Genres from "../pages/Admin/Genre";
import LibraryPatron from "../pages/Admin/LibraryPatron";
import Book from "../pages/Admin/Book";
import CreateBook from "../pages/Admin/Book/CreateBook";
import CreateGenre from "../pages/Admin/Genre/CreateGenre";

const NavPage = () => {
  return (
    <React.Fragment>
      <section className="bg-white m-4 p-5 rounded">
        <div>
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/patrons" element={<LibraryPatron />} />
            <Route path="/books" element={<Book />} />
            <Route path="/book/new" element={<CreateBook />} />
            <Route path="/genre/new" element={<CreateGenre />} />
          </Routes>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
