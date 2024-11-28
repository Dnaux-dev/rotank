import React, { useState } from 'react'
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">Rottank</a>
        
        <nav className="nav-menu">
          <a href="/" className="nav-link">HOME</a>
          <a href="/about" className="nav-link">ABOUT</a>
          <a href="/innovation" className="nav-link">INNOVATION</a>
          <a href="/services" className="nav-link">SERVICES</a>
          <a href="/contact" className="nav-link">CONTACT</a>
          
          <div style={{ position: 'relative' }}>
            <button className="language-selector" onClick={toggleLanguage}>
              <img src="/placeholder.svg?height=20&width=20" alt="Language" />
              {currentLanguage}
            </button>
            <div className={`language-dropdown ${isLanguageOpen ? 'active' : ''}`}>
              <div className="language-option" onClick={() => changeLanguage('English')}>English</div>
              <div className="language-option" onClick={() => changeLanguage('Deutsch')}>Deutsch</div>
              <div className="language-option" onClick={() => changeLanguage('Français')}>Français</div>
            </div>
          </div>
        </nav>

        <button className="hamburger" onClick={toggleMenu}>
          <span>☰</span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <a href="/" className="logo" style={{ color: 'white' }}>Rottank</a>
          <button className="close-menu" onClick={toggleMenu}>✕</button>
        </div>
        
        <nav>
          <a href="/" className="mobile-nav-link">Home</a>
          <a href="/about" className="mobile-nav-link">About</a>
          <a href="/innovation" className="mobile-nav-link">Innovation</a>
          <a href="/services" className="mobile-nav-link">Services</a>
          <a href="/contact" className="mobile-nav-link">Contact</a>
          <div className="mobile-nav-link" onClick={toggleLanguage}>
            <img src="/placeholder.svg?height=20&width=20" alt="Language" style={{ marginRight: '0.5rem' }} />
            {currentLanguage}
          </div>
        </nav>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
