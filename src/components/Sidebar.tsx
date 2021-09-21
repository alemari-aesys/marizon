import React, { useEffect } from "react";
import CSS from "csstype";
import { useHistory } from "react-router";

interface sidebarprops {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<sidebarprops> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}): JSX.Element => {
  const history = useHistory();

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

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
        <div id="open" className="sidebar" style={style0}>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "2em",
              marginRight: "0px",
            }}
          >
            <li onClick={() => history.push("/Personal")}>Il mio account</li>
            <li onClick={() => history.push("/Settings")}>Impostazioni</li>
            <li onClick={() => history.push("/Help")}>Aiuto</li>
            <li onClick={() => history.push("/")}>Disconnetti</li>
          </ul>
        </div>
      ) : (
        <div className="sidebar" style={style1}></div>
      )}
    </>
  );
};

export default Sidebar;
