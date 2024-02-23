import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search..."
      className="w-1/2 appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
    />
  );
};

export default GlobalFilter;
