import React, { useCallback, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import MainPage from "./components/layout/MainPage";
import Auth from "./components/pages/User/Auth";
import BasePage from "./components/pages/MainPage/BasePage";
import Genres from "./components/pages/Admin/Genre";
import LibraryPatron from "./components/pages/Admin/LibraryPatron";
import Book from "./components/pages/Admin/Book";
import CreateBook from "./components/pages/Admin/Book/CreateBook";
import CreateGenre from "./components/pages/Admin/Genre/CreateGenre";
import { AuthContext } from "./components/Shared/Context/Auth-Context";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/mainpage/*" element={<MainPage />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/patrons" element={<LibraryPatron />} />
        <Route path="/books" element={<Book />} />
        <Route path="/book/new" element={<CreateBook />} />
        <Route path="/genre/new" element={<CreateGenre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      store={store}
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Provider store={store}>{routes}</Provider>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
