import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";

export const SidebarData = [
  {
    title: "Genre of Books",
    path: "/mainpage/genres",
    icon: <TbCategoryFilled />,
  },
  {
    title: "Patrons",
    path: "/mainpage/patrons",
    icon: <FaBookReader />,
  },
  {
    title: "Books",
    path: "/mainpage/books",
    icon: <FaBook />,
  },
];
