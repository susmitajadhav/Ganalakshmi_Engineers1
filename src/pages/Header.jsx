import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.pdf";
import { FiMenu, FiX } from "react-icons/fi"; // Modern icons for menu

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Toggle Side Menu
  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

  // Close Menu
  const closeMenu = () => setIsSideMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            {/* <img src={logo} alt="SAV-Tech Associate Logo" /> */}
            <h1>Ganalaxmi Engineers</h1>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>    
          <li><Link to="/contactpage" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/getquote" className="custom-get-quote-btn">Get a Quote</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleSideMenu}>
          {isSideMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Side Menu */}
      <div className={`side-menu ${isSideMenuOpen ? "open" : ""}`}>
        <ul className="side-menu-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>    
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contactpage" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/getquote" className="get-quote-btn">Get a Quote</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
