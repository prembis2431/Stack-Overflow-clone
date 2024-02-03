import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
          <NavLink to="/" className="side-nav-links" activeClassName="active">
            <p>Home</p>
          </NavLink>
         <div className="side-nav-div">
          <div>
            <p>Public</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "5px" }}
          >
            <img src={Globe} alt="Globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeClassName="active"
          >
            <p>Users</p>
          </NavLink>
         </div>
         {/*difference b/w Link and Navlink is that <Navlink/> is used inside a navbar, while <Link/> is used everywhere  */}
      </nav>
    </div>
  );
};

export default LeftSidebar;
