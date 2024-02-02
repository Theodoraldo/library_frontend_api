import React from "react";
import { Route, Routes } from "react-router-dom";
import Genres from "../pages/Admin/Genre";
import LibraryPatron from "../pages/Admin/LibraryPatron";
import Book from "../pages/Admin/Book";

const NavPage = () => {
  return (
    <React.Fragment>
      <section className="bg-white m-4 p-5 rounded font-bold text-2xl">
        <div>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/patrons" element={<LibraryPatron />} />
            <Route path="/books" element={<Book />} />
          </Routes>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
