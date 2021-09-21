import * as React from "react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const HeaderHome = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false);

  // useEffect(() => {
  //     console.log(isSidebarOpen);
  // }, [isSidebarOpen])

  return (
    <header>
      <div style={{ display: "flex" }}>
        <a href="/Home">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <nav className="nav__links">
          <ul>
            <li>
              <a href="#">SERVIZI</a>
            </li>
            <li>
              <a href="#">PROGETTI</a>
            </li>
            <li>
              <a href="#">SU DI NOI</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="four" onClick={() => setIsSideBarOpen(!isSidebarOpen)}>
        {!isSidebarOpen ? (
          <i className="material-icons hamburger">menu</i>
        ) : (
          <span className="material-icons">close</span>
        )}
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </header>
  );
};

export default HeaderHome;
