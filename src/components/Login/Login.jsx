import React from "react";
import { useForm } from "react-hook-form";
import { IoMdMail, IoMdLock } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

//styles
import "./Login.css";
import { changeToCSS, changeToRegister } from "../../store/slices/LoginSlice";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const cssSelector = useSelector((state) => state.login.cssSelector);

  const onSubmit = (data) => {
    console.log(data.login);

    reset();
  };

  return (
    <div className={`todo__login ${cssSelector ? "active-popup" : ""}`}>
      <span className="icon-close" onClick={() => dispatch(changeToCSS())}>
        <AiOutlineClose />
      </span>
      <div className="todo__login-formBox">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="todo__login-formBox_inputBox">
            <span className="icon">
              <IoMdMail />
            </span>
            <input type="text" required />
            <label>Email</label>
          </div>

          <div className="todo__login-formBox_inputBox">
            <span className="icon">
              <IoMdLock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#d">Forgot Password?</a>
          </div>

          <input type="submit" value="Login" className="btn" />

          <div className="login__register">
            <p>
              Don't have an account?{" "}
              <a href="#s" onClick={() => dispatch(changeToRegister(false))}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
