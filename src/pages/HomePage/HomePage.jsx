import React from "react";

//styles
import "./HomePage.css";

//containers
import Todos from "../../containers/Todos/Todos";
import Header from "../../containers/Header/Header";

const HomePage = () => {
  return (
    <div className="todo__home screen-size">
      <Header />
      <div className="outlet__container">
        <Todos />
      </div>
    </div>
  );
};

export default HomePage;
