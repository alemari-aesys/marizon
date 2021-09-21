import { useEffect } from "react";
import CSS from "csstype";
import { relative } from "path";

interface sidebarprops {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<sidebarprops> = ({ isSidebarOpen }): JSX.Element => {
  const style0: CSS.Properties = {
    transform: "translateX(-50px)",
    transition: "all .5s",
  };

  const style1: CSS.Properties = {
    position: "fixed",
    transform: "translate(500px)",
    width: "0px",
    marginRight: "0px",
  };

  return (
    <>
      {isSidebarOpen ? (
        <div className="sidebar" style={style0}>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "2em",
              marginRight: "0px",
            }}
          >
            <li>Il mio account</li>
            <li>Impostazioni</li>
            <li>Aiuto</li>
            <li>Disconnetti</li>
          </ul>
        </div>
      ) : (
        <div className="sidebar" style={style1}>
          <ul
            style={{ listStyleType: "none", width: "0px", height: "0px" }}
          ></ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
