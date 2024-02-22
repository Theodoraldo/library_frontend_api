import { useDispatch } from "react-redux";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { postReturnBook } from "../../redux/History/putRetunBookDataSlice";

export const COLUMNS = (setRefresh) => [
  {
    Header: "Library Patron Name",
    accessor: (row) =>
      `${row.library_patron.firstname} ${row.library_patron.lastname}`,
  },
  {
    Header: "Book to Return",
    accessor: "book.title",
  },
  {
    Header: "Borrowed Date",
    accessor: "borrow_date",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      const dispatch = useDispatch();
      const [showConfirmation, setShowConfirmation] = useState(false);
      const [returnDate, setReturnDate] = useState("");
      const [bookState, setBookState] = useState("");
      const [comment, setComment] = useState("");

      const handleClick = () => {
        if (returnDate === "" || bookState === "") {
          return;
        }
        dispatch(
          postReturnBook({
            id: row.original.id,
            returnDate: returnDate,
            bookState: bookState,
            comment: comment,
          })
        );
        setShowConfirmation(false);
        setReturnDate("");
        setBookState("");
        setComment("");
        setRefresh(true);
      };

      return (
        <div className="flex justify-center gap-2">
          <button
            className="shadow-lg bg-violet-100 hover:bg-violet-200 hover:text-violet-800 text-violet-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowConfirmation(true)}
          >
            <BsFillEyeFill />
          </button>
          {showConfirmation && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-700 text-xl">
                  {`Hello, you are about to return to stocks `}
                  <span className="text-green-500">
                    {row.original?.book?.title ?? "a book"}
                  </span>
                  {` which was borrowed by `}
                  <span className="text-green-500">
                    {row.original?.library_patron?.firstname ?? "a patron"}{" "}
                  </span>
                  <span className="text-green-500">
                    {row.original?.library_patron?.lastname ?? ""}
                  </span>
                  {` on the `}
                  <span className="text-green-500">
                    {row.original?.borrow_date ?? "a certain date"}
                  </span>
                </div>
                <div>
                  <div className="mb-2 mt-2 w-full">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                      id="id"
                      type="text"
                      name="id"
                      disabled
                      hidden
                      value={row.original.id}
                    />
                  </div>
                  <div className="flex justify-between gap-5 mt-1">
                    <div className="mb-2 mt-2 w-full">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="returnDate"
                      >
                        <span className="flex items-center gap-2">
                          Return Date: <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                        id="returnDate"
                        type="date"
                        name="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    </div>

                    <div className="mb-2 mt-2 w-full">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="bookState"
                      >
                        <span className="flex items-center gap-2">
                          State of Book :{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                        id="bookState"
                        name="bookState"
                        value={bookState}
                        onChange={(e) => setBookState(e.target.value)}
                      >
                        <option value="">Select book state</option>
                        <option value="0">Good</option>
                        <option value="1">Bad</option>
                        <option value="2">Torn</option>
                        <option value="3">Lost</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-2 mt-2 w-full">
                    <label
                      className="block text-gray-700 text-sm mb-2"
                      htmlFor="comment"
                    >
                      Comment :
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full h-50 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                      id="comment"
                      type="textarea"
                      name="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Any comment?"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleClick}
                  >
                    Sure
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    },
  },
];
