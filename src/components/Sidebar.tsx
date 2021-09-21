import { useEffect } from "react";

interface sidebarprops {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<sidebarprops> = ({ isSidebarOpen }): JSX.Element => {
  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul style={{ listStyleType: "none", fontSize: "2em" }}>
            <li>Il mio account</li>
            <li>Impostazioni</li>
            <li>Aiuto</li>
            <li>Disconnetti</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
