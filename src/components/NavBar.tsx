import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Awadhooth S K</div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end>Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/experience">Work</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/interests">Interests</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default Navbar;
