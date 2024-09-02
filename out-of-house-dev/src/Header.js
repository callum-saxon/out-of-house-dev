import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/out-of-house-logo.png';
import './App.css';

const Header = ({ activeSection, handleNavClick }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="logo">
          <img src={logo} alt="Out-House Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to=" "
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                handleNavClick(e, '#home');
                setMenuOpen(false); // Close the menu after click
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to=" "
              className={activeSection === 'services' ? 'active' : ''}
              onClick={(e) => {
                handleNavClick(e, '#services');
                setMenuOpen(false); // Close the menu after click
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to=" "
              className={activeSection === 'benefits' ? 'active' : ''}
              onClick={(e) => {
                handleNavClick(e, '#benefits');
                setMenuOpen(false); // Close the menu after click
              }}
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to=" "
              className={activeSection === 'pricing' ? 'active' : ''}
              onClick={(e) => {
                handleNavClick(e, '#pricing');
                setMenuOpen(false); // Close the menu after click
              }}
            >
              Pricing
            </Link>
          </li>
          {/* Only render "Contact Us" in the dropdown for mobile */}
          {isMobile && (
            <li>
              <Link
                to="/schedule-call"
                className={location.pathname === '/schedule-call' ? 'active' : ''}
                onClick={() => setMenuOpen(false)} // Close the menu after click
              >
                Contact Us
              </Link>
            </li>
          )}
        </ul>
        {/* Render Contact Us button separately for desktop */}
        {!isMobile && (
          <a href="https://cal.com/out-of-house.dev" target="_blank" rel="noopener noreferrer">
            <span className="contact-btn">Contact Us</span>
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
