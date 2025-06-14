import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CozyWay Logo" className="logo" />
        <h1 className="brand-name">CozyWay PG</h1>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="nav-button login-button">Login</Link>
        <Link to="/register" className="nav-button register-button">Register</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`line ${isOpen ? 'line1' : ''}`}></span>
        <span className={`line ${isOpen ? 'line2' : ''}`}></span>
        <span className={`line ${isOpen ? 'line3' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
