import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Logo placeholder</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="example.html">Examples</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
