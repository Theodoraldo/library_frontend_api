import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPatrons } from "../../../redux/Patron/getPatronDataSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "../../Tables/PatronColumns";
import GlobalFilter from "../../Tables/GlobalFilter";

const LibraryPatron = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllPatronData, loading, error } = useSelector(
    (state) => state.getAllPatrons
  );

  useEffect(() => {
    dispatch(fetchAllPatrons());
  }, [dispatch]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => getAllPatronData, [getAllPatronData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    state,
    setGlobalFilter,
    pageOptions,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="text-2xl font-bold">List of Library Patrons</div>
      <div>
        <div className="flex justify-between mt-2">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg"
            onClick={() => navigate("/mainpage/patron/new")}
          >
            New Patron
          </button>
        </div>
      </div>
      {loading && (
        <div className="text-green-500 font-bold bg-green-100 p-3 mt-3 rounded">
          Loading data...
        </div>
      )}
      {error && (
        <div className="text-red-500 font-bold bg-red-100 p-3 mt-3 rounded">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <table
            {...getTableProps()}
            className="w-full mt-2 border-collapse border"
          >
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 bg-gray-400 text-white text-left text-xs leading-4 font-medium uppercase tracking-wider border-b"
                      key={index}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "⬆️"
                            : "⬇️"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-1 whitespace-no-wrap border-b text-sm leading-5 text-gray-900"
                        key={index}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-3 flex justify-center">
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              ⏮️
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              ⏭️
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LibraryPatron;
