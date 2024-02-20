import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BookDetailsModal from "../../../UIElements/BooksModel";
import BookImage from "../../../UIElements/BookImage";

const ShowBooks = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { getAllGenreData } = useSelector((state) => state.getAllGenres);
  const itemsPerPage = 5;

  useEffect(() => {
    const newFilteredBooks = props.books
      ? props.books.filter((book) =>
          book.title.toLowerCase().includes(props.filter.toLowerCase())
        )
      : [];
    setFilteredBooks(newFilteredBooks);
  }, [props.books, props.filter]);

  const books = filteredBooks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const selectBook = (book) => {
    setShowModal(book);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Genre
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 cursor-pointer">
          {books.map((book, index) => {
            return (
              <tr key={index} onClick={() => selectBook(book)}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <BookImage
                    imagePath={book.image_path}
                    title={book.title}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getAllGenreData.find((genre) => genre.id === book.genre_id)
                    ?.genre_name || "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && (
        <BookDetailsModal book={showModal} onClose={() => setShowModal(null)} />
      )}
      <div className="flex justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredBooks.length / itemsPerPage) - 1
          }
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowBooks;
