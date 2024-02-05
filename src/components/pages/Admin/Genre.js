import React from "react";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-2xl font-bold">List of Genres</div>
      <div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
            onClick={() => navigate("/genre/new")}
          >
            Create Genre
          </button>
        </div>
      </div>
    </>
  );
};

export default Genre;
