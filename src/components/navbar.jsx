import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/projects">projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;