import { FaBook } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { IoEnterSharp } from "react-icons/io5";
import { TbCalendarDue } from "react-icons/tb";

export const SidebarData = [
  {
    title: "Genre (Category)",
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
  {
    title: "Issue Book",
    path: "/mainpage/issue_books",
    icon: <FaRegHandshake />,
  },
  {
    title: "Returned (History)",
    path: "/mainpage/returned_books",
    icon: <IoEnterSharp />,
  },
  {
    title: "To Be Returned",
    path: "/mainpage/due_books",
    icon: <TbCalendarDue />,
  },
];
