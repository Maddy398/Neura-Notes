import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          NeuraNotes
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? "active" : "")}>
             My Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Inquiry
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}
