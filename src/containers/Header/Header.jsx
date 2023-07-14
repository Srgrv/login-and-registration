import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { changeToCSS } from "../../store/slices/LoginSlice";

//styles
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="todo__header">
      <h2 className="todo__header-logo">Logo</h2>
      <nav className="todo__header-navigation">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Contacts">Contacts</a>
        <button onClick={() => dispatch(changeToCSS())}>Login</button>
      </nav>
    </header>
  );
};

export default Header;
