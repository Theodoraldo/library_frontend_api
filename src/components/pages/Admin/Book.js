import React from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <div className="text-2xl font-bold">List of Books</div>
        <div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
              onClick={() => navigate("/mainpage/book/new")}
            >
              Create Book
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Book;
