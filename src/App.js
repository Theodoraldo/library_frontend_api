import React from "react";
import MainPage from "./components/layout/MainPage";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
