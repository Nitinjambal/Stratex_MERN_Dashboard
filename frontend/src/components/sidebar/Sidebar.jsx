import React, { useContext } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const { user } = useContext(AuthContext);
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title border-b border-white">
        <div className="sidebar-brand text-white-600 text-center">
          Welcome <br />
          {` ${user.name}`}
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to={"/"}>
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
        </Link>

        <Link to={"#"}>
          <li className="sidebar-list-item">
            <BsListCheck className="icon" /> Inventory
          </li>
        </Link>

        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /> Setting
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
