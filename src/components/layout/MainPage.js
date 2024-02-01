import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";

export default function MainPage() {
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
          <div className="col-span-9">
            <NavPage />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
