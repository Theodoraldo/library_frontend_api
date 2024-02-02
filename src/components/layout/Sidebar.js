import React from "react";
import { SidebarData } from "../data/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const addActive =
    "text-gray-800 border-l-4 p-1 bg-gray-400 w-full rounded border-blue-500 font-semibold";
  const removeActive = "text-white w-full";

  return (
    <React.Fragment>
      <section>
        <div className="text-white">
          <ul className="flex flex-col gap-5 p-5">
            {SidebarData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 p-1 text-xl font-semibold"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? addActive : removeActive
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </NavLink>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
