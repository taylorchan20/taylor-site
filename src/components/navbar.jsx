import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/projects">projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;