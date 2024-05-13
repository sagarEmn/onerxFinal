import React, { useState } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Call AOS.init()
AOS.init({
  offset: 100,
  duration: 1000,
  easing: "ease-in",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Top left corner heading */}
        <Link to="/" className="navbar-logo">
        <img src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515622/homeGallery/logo1_otdeu7.png" alt="logo-retina-1" border="0" />
        </Link>
        {/* Nav Icon */}
        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Navigation links */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-links">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              SERVICES
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              GALLERY
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              IN-HOUSE PRODUCTION
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
