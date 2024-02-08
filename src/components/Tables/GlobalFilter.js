import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">Search :</span>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
      />
    </div>
  );
};

export default GlobalFilter;
