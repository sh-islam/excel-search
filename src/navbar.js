import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import appIcon from "./app-icon.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/excel-search/" className="nav-logo">
          <img src={appIcon} alt="App Logo" className="logo-image" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/excel-search/">Home</Link></li> 
          <li><Link to="/excel-search/example/">Examples</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
