import React, { useState, useEffect } from 'react'
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // sticky code line
  const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
         <nav className="nav-menu"></nav>
      </header>
    );
    };
    

// end of sticky codeline
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <img src="/assets/logo.png" alt="Company Logo" className="logo-image" width={150} height={120} />
        </a>

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
          <a href="/" className="logo">
          <img src="/assets/logo.png" alt="Company Logo" className="logo-image" width={150} height={120} />
          </a>
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
      </div>
      
    </header>
  );
}

export default Header;
