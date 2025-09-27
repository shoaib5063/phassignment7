import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <div className="brand">
          <span className="brand-title">CS — Ticket System</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <button className="btn btn-primary">+ New Ticket</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
