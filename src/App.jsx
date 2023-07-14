import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "./App.css";

//pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";

//containers
import Layout from "./containers/Layout/Layout";

import { getTodosAsync } from "./store/slices/HomeSlice";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
