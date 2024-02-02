import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";
import library from "../../assets/library.svg";

const MainPage = () => {
  const bgImage = {
    backgroundImage: `url(${library})`,
    backgroundSize: "300px 300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#d1d5db",
    height: "90vh",
  };
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <section>
          <Navbar />
        </section>
        <section className="grid grid-cols-12">
          <div className="col-span-3 bg-gray-700">
            <Sidebar />
          </div>
          <div className="col-span-9" style={bgImage}>
            <NavPage />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
