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
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Provider store={store}>{routes}</Provider>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
