import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import "./Layout.css";

//containers

import Navbar from "../Navbar/Navbar";

const Layout = () => {
  const name = useSelector((state) => state.login.name);

  return (
    <div className="todo__layout">
      <div className="todo__layout-conteiner">
        {name ? <Navbar /> : ""}
        <main className="todo__layout-container_main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
