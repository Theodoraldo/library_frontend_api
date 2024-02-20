import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import BookImage from "./BookImage";

const BookDetailsModal = ({ book, onClose }) => {
  return (
    <div className="absolute overflow-y-auto right-0 top-52 max-h-full mr-4 w-64 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="self-end p-2 rounded-full text-red-500 hover:bg-red-700 hover:text-white transition duration-200 ease-in-out"
        style={{ marginRight: "-15px", marginTop: "-15px" }}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>

      <BookImage
        imagePath={book.image_path}
        title={book.title}
        className="w-32 h-32 mt-4 rounded-lg"
      />
      <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
        {book.title}
      </h3>
      <p className="text-sm text-gray-500">Author: {book.author}</p>
      <p className="text-sm text-gray-500">
        Available Copies: {book.available_copies}
      </p>
      <p className="text-sm text-gray-500">
        Published Date: {book.published_date}
      </p>
      <p className="text-sm text-gray-500">Pages: {book.pages}</p>
      <p className="text-sm text-gray-500 text-center">Note: {book.note}</p>
    </div>
  );
};

export default BookDetailsModal;
