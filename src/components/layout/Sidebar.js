import React from "react";
import { SidebarData } from "../data/SidebarData";

export default function Sidebar() {
  return (
    <React.Fragment>
      <section>
        <div className="text-white">
          <ul className="flex flex-col gap-5 p-5">
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
