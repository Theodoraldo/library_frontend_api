import React from "react";
import MainPage from "./components/layout/MainPage";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
