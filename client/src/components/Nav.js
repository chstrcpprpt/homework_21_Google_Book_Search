import React from 'react'
import { NavLink } from "react-router-dom";

import "../index.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="link">
        <h3 className="nav-logo">Google Books</h3>
      </NavLink>
      <ul className="nav-links">
        <NavLink className="nav-link" to="/" style={{ textDecoration: 'none' }}>
          <li className="link">Search</li>
        </NavLink>
        <NavLink className="nav-link" to="/saved" style={{ textDecoration: 'none' }}>
          <li className="link">Saved</li>
        </NavLink>
      </ul>
    </nav>
  )
}
