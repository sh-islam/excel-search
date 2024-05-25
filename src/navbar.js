// navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Logo placeholder</Link> {/* For routing use Link instead of anchor tag */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/example">Examples</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
