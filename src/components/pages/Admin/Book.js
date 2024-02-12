import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBook } from "../../../redux/Book/getBookDataSlice";
import ShowBooks from "./Book/ShowBooks";

const Book = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllBookData, loading, error } = useSelector(
    (state) => state.getAllBooks
  );

  useEffect(() => {
    dispatch(fetchAllBook());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        {console.log("genreData", getAllBookData)}
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
        <ShowBooks books={getAllBookData} />
      </div>
    </React.Fragment>
  );
};

export default Book;
