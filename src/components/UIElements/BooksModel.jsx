import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BookDetailsModal = ({ book, onClose }) => {
  const base64Image = book.image_path
    ? book.image_path.replace(/-/g, "+").replace(/_/g, "/")
    : "";
  const padding =
    base64Image.length % 4 ? "=".repeat(4 - (base64Image.length % 4)) : "";
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
    <div className="fixed right-0 top-52 mr-4 w-64 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
      <button
        onClick={onClose}
        className="self-end p-2 rounded-full text-red-500 hover:bg-red-700 hover:text-white transition duration-200 ease-in-out"
        style={{ marginRight: "-15px", marginTop: "-15px" }}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <img
        src={`data:image/${format};base64,${paddedBase64Image}`}
        alt={book.title}
        className="w-32 h-32 object-cover mt-4"
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
      <p className="text-sm text-gray-500">Note: {book.note}</p>
    </div>
  );
};

export default BookDetailsModal;
