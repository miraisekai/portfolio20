// Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Ben Espino</h1>
      <NavLink className="link" to="/portfolio20">
        About Me
      </NavLink>
      <NavLink className="link" to="/portfolio20/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="link" to="/portfolio20/contact">
        Contact
      </NavLink>
      <NavLink className="link" to="/portfolio20/resume">
        Resume
      </NavLink>
    </header>
  );
}

export default Header;
