import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Import Header styles

function Header() {
  return (
    <header>
      <h1>Sumaila Mohammed</h1>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">About Me</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
