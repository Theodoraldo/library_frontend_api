import React from "react";
import { Route, Routes } from "react-router-dom";
import Genres from "../pages/Genre";
import LibraryPatron from "../pages/LibraryPatron";
import Book from "../pages/Book";

export default NavPage = () => {
  return (
    <React.Fragment>
      <section className="bg-white m-4 p-5 rounded font-bold text-2xl">
        <div>
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/patrons" element={<LibraryPatron />} />
            <Route path="/books" element={<Book />} />
          </Routes>
        </div>
      </section>
    </React.Fragment>
  );
};
