import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import appIcon from "./app-icon.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={appIcon} alt="App Logo" className="logo-image" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/example">Examples</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
