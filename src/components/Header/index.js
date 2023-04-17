// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Ben Espino</h1>
      <NavLink className="link" to="/">
        About Me
      </NavLink>
      <NavLink className="link" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="link" to="/contact">
        Contact
      </NavLink>
      <NavLink className="link" to="/Resume">
        Resume
      </NavLink>
    </header>
  );
}

export default Header;
