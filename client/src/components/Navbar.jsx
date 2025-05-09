import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">QuickEats</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
