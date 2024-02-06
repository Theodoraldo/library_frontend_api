import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../UIElements/Card";
import Button from "../../Shared/Components/FormElements/Button";
import bookimg from "../../../assets/base_book.jpg";
import "./CSS/BasePage.css";

const BasePage = () => {
  const navigate = useNavigate();

  return (
    <Card className="base_page w-[80%]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to Library</h1>
        <hr className="border-gray-200" />
      </div>
      <div className="mb-2 mt-3">
        <p className="text-lg font-semibold mb-2">
          Why Books and Reading is Important?
        </p>
        <div className="flex">
          <img src={bookimg} alt="book" className="rounded-lg w-24" />
          <p className="text-gray-700 mb-4">
            Books are a rich source of information, providing knowledge, mental
            stimulation, and stress reduction. Regular reading can improve brain
            connectivity, writing skills, and foster imagination and creativity.
            Furthermore, books offer invaluable life skills and insights into a
            variety of topics, helping us understand the world around us better.
          </p>
        </div>
        <hr className="border-gray-200 mt-2" />
      </div>
      <div className="">
        <p>Choose your role</p>
      </div>
      <div className="p-5">
        <Button type="submit" inverse onClick={() => navigate("/auth")}>
          Admin
        </Button>
        <Button type="submit" inverse onClick={() => navigate("/auth")}>
          Librarian
        </Button>
      </div>
    </Card>
  );
};

export default BasePage;
