import React, { useEffect, useMemo } from "react";
import { COLUMNS } from "../../Tables/BorrowColumns";
import GlobalFilter from "../../Tables/GlobalFilter";
import { useSelector, useDispatch } from "react-redux";
import { fetchBorrowedBook } from "../../../redux/History/getBorrowedBooksSlice";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

const BorrowedBooks = () => {
  const dispatch = useDispatch();
  const { getAllBorrowedData, loading, error } = useSelector(
    (state) => state.getAllBorrowed
  );

  useEffect(() => {
    if (getAllBorrowedData.length === 0) {
      dispatch(fetchBorrowedBook());
    }
  }, [dispatch, getAllBorrowedData]);

  const columns = useMemo(() => COLUMNS(), []);
  const data = useMemo(() => getAllBorrowedData, [getAllBorrowedData]);

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
      <div className="text-2xl font-bold">Books To Be Returned</div>
      <div>
        <div className="flex justify-between mt-2">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      {getAllBorrowedData.length === 0 && (
        <div className="text-gray-500 font-bold bg-gray-100 p-3 mt-3 rounded">
          No data is present
        </div>
      )}
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

export default BorrowedBooks;
