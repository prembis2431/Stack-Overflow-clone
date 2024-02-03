import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  var User = null; // if var user = null, that implies there's no user present, hence, in condition
  // rendering,  {User=== null ?
  // <Link to='/Auth' className='nav-items nav-links'>Log in</Link> :  this part will get rendered
  // and the log in button would be shown, else if the other part is rendered then that implies, user is present and a logout button is showed.
  return (
    <nav className="main-nav">
    <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For teams
        </Link>
        <form>
          <input type="text" placeholder="Search"></input>
          <img
            src={search}
            alt="search"
            width="18"
            className="search-icon"
          ></img>
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-items nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="7px"
              py="11px"
              borderRadius="50%"
              color="white"
              textDecoration="none"
            >
              <Link to="/User" style={{color:"white", textDecoration:"none"}} className="">
                M
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
