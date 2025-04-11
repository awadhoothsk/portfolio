import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/work-experience">Experience</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/interests">Interests</NavLink></li>
      <li><NavLink to="/education">Education</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;