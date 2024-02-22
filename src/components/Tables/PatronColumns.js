import { useState } from "react";
import { deletePatron } from "../../redux/Patron/deletePatronSlice";
import { postAttendance } from "../../redux/History/postAttendanceDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { TbTreadmill } from "react-icons/tb";

export const COLUMNS = (setRefresh) => [
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
      const [showAttendanceConfirmation, setShowAttendanceConfirmation] =
        useState(false);

      const handleDelete = (id) => {
        dispatch(deletePatron(id));
        setShowConfirmation(false);
        setRefresh(true);
      };

      const handleAttendance = (patronId) => {
        dispatch(postAttendance(patronId));
        setShowAttendanceConfirmation(false);
        setRefresh(true);
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
          <button
            className="shadow-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowAttendanceConfirmation(true)}
          >
            <TbTreadmill />
          </button>
          {showConfirmation && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-xl">
                  Are you sure you want to delete{" "}
                  <span className="text-green-500">
                    {row.original.firstname + " " + row.original.lastname}
                  </span>
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

          {showAttendanceConfirmation && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-xl">
                  Welcome{" "}
                  <span className="text-green-500">
                    {row.original.firstname + " " + row.original.lastname}
                  </span>
                  {". "}
                  As you wander through our shelves, may you discover new realms
                  to explore, new ideas to ponder, and new friends within the
                  pages of our collection. Our dedicated staff is here to assist
                  you on your literary journey, so don't hesitate to ask if you
                  need guidance or recommendations.
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-blue-500 hover:bg-[#1c4587] text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleAttendance(row.original.id)}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setShowAttendanceConfirmation(false)}
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
