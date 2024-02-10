import { useState } from "react";
import { deletePatron } from "../../redux/Patron/deletePatronSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export const COLUMNS = [
  {
    Header: "Full Name",
    accessor: (row) => `${row.firstname} ${row.lastname}`,
  },
  {
    Header: "contact",
    accessor: "contact",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "address",
    accessor: "address",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [showConfirmation, setShowConfirmation] = useState(false);

      const handleDelete = (id) => {
        dispatch(deletePatron(id));
        setShowConfirmation(false);
      };

      return (
        <div className="flex justify-center gap-2">
          <button
            className="shadow-lg bg-blue-100 hover:bg-blue-200 hover:text-blue-800 text-blue-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate(`/mainpage/patron/edit/${row.original.id}`)}
          >
            <FaRegEdit />
          </button>
          <button
            className="shadow-lg bg-red-100 hover:bg-red-200 text-red-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowConfirmation(true)}
          >
            <RiDeleteBin5Line />
          </button>
          {/* Confirmation dialog */}
          {showConfirmation && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4">
                  Are you sure you want to delete{" "}
                  {row.original.firstname + " " + row.original.lastname} ?
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(row.original.id)}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setShowConfirmation(false)}
                  >
                    No
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
