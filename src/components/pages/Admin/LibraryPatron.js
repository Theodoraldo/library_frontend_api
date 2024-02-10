import React from "react";
import GlobalFilter from "../../Tables/GlobalFilter";
import { useNavigate } from "react-router-dom";

const LibraryPatron = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-2xl font-bold">List of Library Patrons</div>
      <div>
        <div className="flex justify-between mt-2">
          <GlobalFilter />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
            onClick={() => navigate("/mainpage/patron/new")}
          >
            New Patron
          </button>
        </div>
      </div>
    </>
  );
};

export default LibraryPatron;
