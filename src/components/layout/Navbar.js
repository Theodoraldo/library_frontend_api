import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import book from "../../assets/books.svg";
import user from "../../assets/user.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    setShowPopup(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <nav className="w-full h-25 bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div className="flex ms-2 md:me-24 gap-5">
                <img src={book} alt="library logo" width={50} />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  BookShelf Library
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(!showPopup)}
              style={{ backgroundColor: "transparent" }}
              className="flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <img src={user} alt="user logo" width={40} />
            </button>
          </div>
        </div>
      </nav>
      {showPopup && (
        <div className="flex items-end justify-end px-4 text-white">
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
