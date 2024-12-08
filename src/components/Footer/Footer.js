import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OFFICES</h3>
          <div className="office">
            <h4>NETHERLANDS</h4>
            <p>T <a href="tel:+31104876200">+31 (0) 10 487 62 00</a></p>
            <p>E <a href="mailto:info@vtgroup.nl">info@vtgroup.nl</a></p>
          </div>
          <div className="office">
            <h4>SPAIN</h4>
            <p>T <a href="tel:+34856147020">+34 856 14 70 20</a></p>
            <p>E <a href="mailto:info.spain@vtshipping.com">info.spain@vtshipping.com</a></p>
          </div>
          <div className="office">
            <h4>PANAMA</h4>
            <p>T <a href="tel:+507225-9271">+507 225-9271</a></p>
            <p>E <a href="mailto:info@vtshipping.com">info@vtshipping.com</a></p>
          </div>
        </div>

        <div className="footer-section">
          <h3>CERTIFIED</h3>
          <div className="certificates">
            <img src="/placeholder.svg?height=100&width=100" alt="LRQA ISO 9001:2015 Certified" />
            <img src="/placeholder.svg?height=100&width=100" alt="LRQA ISO 14001:2015 Certified" />
          </div>
        </div>

        <div className="footer-section">
          <h3>FOR PANAMA / SPAIN:</h3>
          <div className="certificates">
            <img src="/placeholder.svg?height=100&width=200" alt="Bureau Veritas ISO 9001 Certification" />
            <img src="/placeholder.svg?height=100&width=200" alt="Bureau Veritas ISO 14001 Certification" />
          </div>
        </div>

        {/* <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/placeholder.svg?height=40&width=40" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/placeholder.svg?height=40&width=40" alt="YouTube" />
            </a>
          </div>
          <div className="members">
            <h3>MEMBERS OF</h3>
            <img src="/placeholder.svg?height=60&width=120" alt="IBIA Logo" />
          </div>
        </div> */}
      </div>

      <nav className="footer-nav">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/innovation">Innovation</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="language-links">
          <a href="#" className="lang-link">
            <img src="/assets/Netherland.jpg" alt="Nederlands flag" />
            Netherlands
          </a>
          <a href="#" className="lang-link">
            <img src="/assets/English.jpg" alt="English flag" />
            English
          </a>
          <a href="#" className="lang-link">
            <img src="/assets/Deutsch.jpg" alt="Deutsch flag" />
            Deutsch
          </a>
          <a href="#" className="lang-link">
            <img src="/assets/spain.jpg" alt="Español flag" />
            Español
          </a>
        </div>
      </nav>

      <div className="footer-bottom">
        <p>Copyright © 2024 Rottank Group. All Rights Reserved.</p>
        <p>Design and developed by <a href="#">Dnaux-dev</a></p>
      </div>
    </footer>
  )
}

export default Footer