import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="rightHeader">
        <h1>Roaster Project</h1>
      </div>
      <div className="leftHeader">
        <NavLink className="link" activeClassName="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="link" activeClassName="headerLink" to="/teams">
          Teams
        </NavLink>
        <NavLink className="link" activeClassName="headerLink" to="/players">
          Players
        </NavLink>
        {/* <NavLink
          className="link"
          activeClassName="headerLink"
          onClick={logoutHandler}
          to="/login"
        >
          LogOut
        </NavLink> */}
        {/* <NavLink className="link" activeClassName="headerLink" to="/contactus">
          Contact Us
        </NavLink> */}
      </div>
    </div>
  );
}

export default Header;
