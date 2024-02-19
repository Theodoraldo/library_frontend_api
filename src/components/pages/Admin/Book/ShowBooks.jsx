import React, { useState, useEffect } from "react";
import BookDetailsModal from "../../../UIElements/BooksModel";

const ShowBooks = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const itemsPerPage = 10;

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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 cursor-pointer">
          {books.map((book, index) => {
            const base64Image = book.image_path
              ? book.image_path.replace(/-/g, "+").replace(/_/g, "/")
              : "";
            const padding =
              base64Image.length % 4
                ? "=".repeat(4 - (base64Image.length % 4))
                : "";
            const paddedBase64Image = base64Image + padding;

            let format;
            if (paddedBase64Image.startsWith("/9j/")) {
              format = "jpeg";
            } else if (paddedBase64Image.startsWith("iVBOR")) {
              format = "png";
            } else if (paddedBase64Image.startsWith("R0lGOD")) {
              format = "gif";
            } else if (paddedBase64Image.startsWith("Qk02")) {
              format = "bmp";
            } else {
              format = "jpeg"; // default to jpeg if format cannot be determined
            }

            return (
              <tr key={index} onClick={() => selectBook(book)}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={`data:image/${format};base64,${paddedBase64Image}`}
                    alt={book.title}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
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
          disabled={currentPage === props.books.length / itemsPerPage - 1}
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowBooks;
