import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { putAttendance } from "../../redux/Attendance/putAttendanceDataSlice";

export const COLUMNS = (setRefresh) => [
  {
    Header: "Library Patron Name",
    accessor: (row) =>
      `${row.library_patron.firstname} ${row.library_patron.lastname}`,
  },
  {
    Header: "Checked In Date",
    accessor: "check_in_date",
  },
  {
    Header: "Checked In Time",
    accessor: "check_in_time",
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      const dispatch = useDispatch();
      const [showConfirmation, setShowConfirmation] = useState(false);

      const handleClick = () => {
        dispatch(putAttendance({ id: row.original.id }));
        setShowConfirmation(false);
        setRefresh(true);
      };

      return (
        <div className="flex justify-center gap-2">
          <button
            className="shadow-lg bg-orange-100 hover:bg-orange-200 hover:text-orange-800 text-orange-700 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowConfirmation(true)}
          >
            <FaSignOutAlt />
          </button>
          {showConfirmation && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-700 text-xl">
                  {` You are checking out `}
                  <span className="text-teal-600">
                    {row.original?.library_patron?.firstname ?? "a patron"}{" "}
                  </span>
                  <span className="text-teal-600">
                    {row.original?.library_patron?.lastname ?? ""}
                  </span>
                  {` who checked in at `}
                  <span className="text-teal-600">
                    {row.original.check_in_time}
                  </span>
                  {`. Thank you for gracing our library with your presence. See you again.`}
                </div>
                <p className="text-xl">Do you want to proceed?</p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleClick}
                  >
                    Okay
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
