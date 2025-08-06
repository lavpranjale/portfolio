import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection, activeSection, name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navSections = ['about', 'skills', 'experience', 'projects', 'blogs', 'education', 'contact'];

  return (
    <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-logo-btn" onClick={() => scrollToSection('hero')}>
          <span className="nav-logo-text">{name}</span>
        </button>
        <div className="nav-links-desktop">
          {navSections.map(sectionId => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`nav-link ${activeSection === sectionId ? 'nav-link-active' : ''}`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
        <button
          className="nav-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="nav-menu-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="nav-links-mobile">
          {navSections.map(sectionId => (
            <button
              key={sectionId}
              onClick={() => {
                scrollToSection(sectionId);
                setIsMenuOpen(false);
              }}
              className={`nav-link-mobile ${activeSection === sectionId ? 'nav-link-mobile-active' : ''}`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;