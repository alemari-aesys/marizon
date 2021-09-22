import * as React from "react";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import useOnClickOutside from "../customHook/useOnClickOutside";

const HeaderHome = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const sidebar = useRef<HTMLDivElement>(null);
  const burger = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        event.target !== sidebar.current &&
        event.target !== burger.current
      ) {
        setIsSideBarOpen(!isSidebarOpen);
      }
    });
  }, [isSidebarOpen]);

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
        {
          <i ref={burger} className="material-icons" id="burger">
            {!isSidebarOpen ? "menu" : "close"}
          </i>
        }
      </div>
      <Sidebar
        sidebarRef={sidebar}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSideBarOpen}
      />
    </header>
  );
};

export default HeaderHome;
