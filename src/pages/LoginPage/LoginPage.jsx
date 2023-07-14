import React from "react";
import { useSelector } from "react-redux";

//styles
import "./LoginPage.css";

//containers
import Header from "../../containers/Header/Header";

//containers
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const LoginPage = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <div className="todo__loginPage screen-size">
      <Header />
      <div className="todo__loginPage-login">
        {login ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default LoginPage;
