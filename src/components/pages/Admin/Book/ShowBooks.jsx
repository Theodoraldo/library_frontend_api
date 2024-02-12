import React, { useState } from "react";

const ShowBooks = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const books = props.books
    ? props.books.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : [];

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available Copies
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Published Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pages
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Note
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.available_copies}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.published_date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{book.pages}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
