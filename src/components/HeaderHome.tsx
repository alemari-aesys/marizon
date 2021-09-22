import * as React from "react";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router";

// import useOnClickOutside from "../customHook/useOnClickOutside";

const HeaderHome = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [scrollVertical, setScrollVertical] = useState(0);
  const [showBurger, setShowBurger] = useState(false);
  const location = useLocation();
  const sidebar = useRef<HTMLDivElement>(null);
  const burger = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollVertical(Math.round(window.scrollY));
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      console.log(event.target);

      if (
        isSidebarOpen &&
        event.target !== sidebar.current &&
        event.target !== burger.current
      ) {
        setIsSideBarOpen(!isSidebarOpen);
      }
    });
  }, [isSidebarOpen]);

  useEffect(() => {
    if (scrollVertical > 60) {
      console.log("mario");

      document.getElementsByTagName("header")[0].style.position = "fixed";
      document.getElementById("ngulamammt")!.style.paddingTop = "77px";
      document.getElementsByTagName("header")[0].style.width = "100%";
      document.getElementsByTagName("header")[0].style.zIndex = "1";
    }
    console.log(scrollVertical);
  }, [scrollVertical]);

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
      {location.pathname !== "/" && (
        <div className="four" onClick={() => setIsSideBarOpen(!isSidebarOpen)}>
          {
            <i ref={burger} className="material-icons" id="burger">
              {!isSidebarOpen ? "menu" : "close"}
            </i>
          }
        </div>
      )}
      <Sidebar
        sidebarRef={sidebar}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSideBarOpen}
      />
    </header>
  );
};

export default HeaderHome;
