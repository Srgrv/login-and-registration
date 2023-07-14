import React from "react";
import { useForm } from "react-hook-form";
import { IoMdMail, IoMdLock } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { ImUser } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";

//reducers
import { changeToLogin, changeToCSS } from "../../store/slices/LoginSlice";

//styles
import "./Register.css";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const cssSelector = useSelector((state) => state.login.cssSelector);

  const onSubmit = (data) => {
    console.log(data.login);

    reset();
  };

  return (
    <div className={`todo__register ${cssSelector ? "active-popup" : ""}`}>
      <span className="icon-close" onClick={() => dispatch(changeToCSS())}>
        <AiOutlineClose />
      </span>
      <div className="todo__register-formBox">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="todo__register-formBox_inputBox">
            <span className="icon">
              <ImUser />
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>

          <div className="todo__register-formBox_inputBox">
            <span className="icon">
              <IoMdMail />
            </span>
            <input type="text" required />
            <label>Email</label>
          </div>

          <div className="todo__register-formBox_inputBox">
            <span className="icon">
              <IoMdLock />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              I'm agree to the terms & conditions
            </label>
          </div>

          <input type="submit" value="Register" className="btn" />

          <div className="login__register">
            <p>
              Already have an account?{" "}
              <a href="#s" onClick={() => dispatch(changeToLogin(true))}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
