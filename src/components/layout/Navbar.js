import React from "react";
import book from "../../assets/books.svg";
import user from "../../assets/user.svg";

const Navbar = () => {
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
            <img src={user} alt="user logo" width={40} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
