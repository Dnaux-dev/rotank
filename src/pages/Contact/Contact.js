import React, { useState } from 'react'
import './Contact.css'
// import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'react-icons/lu'
import { LuMapPin } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-container">
      {/* Core Values Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Driven by our core values: quality, safety, innovation and sustainability</h1>
          <h2>— Zero spills, no incidents</h2>
        </div>
        
        <div className="emergency-contact-box">
          <div className="emergency-contact-content">
            <p>Operations (outside office hours): <strong>+31 6 5356 2532</strong></p>
            <p>Repair & maintenance: <strong>+31 10 4876244</strong></p>
            <p>Emergency Contacts "VT The Netherlands" Location (contact form):</p>
          </div>
        </div>

        <div className="social-links">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </section>

      <div className="contact-content">
        {/* Contact Form */}
        <section className="form-section">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location <span className="required">*</span></label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">-Select-</option>
                <option value="netherlands">Netherlands</option>
                <option value="spain">Spain</option>
                <option value="laspalmas">Las Palmas</option>
                <option value="panama">Panama</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        {/* Office Locations */}
        <section className="locations-section">
          <div className="location-card">
            <h3>NETHERLANDS</h3>
            <p>Nijmegenstraat 1, 3087 CD</p>
            <p>Rotterdam</p>
            {/* <p><Phone className="icon" /> +31 (0) 10 487 62 00</p>
            <p><Mail className="icon" /> <a href="mailto:info@vtgroup.nl">info@vtgroup.nl</a></p> */}
          </div>

          <div className="location-card">
            <h3>SPAIN</h3>
            <p>Edificio Torres de Hércules. Planta 12. Torre B.</p>
            <p>Parque Empresarial y Tecnológico Las Marismas de Palmones.</p>
            <p>11379, T.M Los Barrios (Cádiz).</p>
            {/* <p><Phone className="icon" /> +34 856 14 70 20</p>
            <p><Mail className="icon" /> <a href="mailto:info.spain@vtshipping.com">info.spain@vtshipping.com</a></p> */}
          </div>

          <div className="location-card">
            <h3>LAS PALMAS</h3>
            <p>c/Profesor Lozano, 36 – 2º dcha.</p>
            <p>Urb.Industrial El Sebadal</p>
            <p>35008 Las Palma de Gran Canaria</p>
            <p>Tel: +34 828 681 080</p>
          </div>

          <div className="location-card">
            <h3>PANAMA</h3>
            <p>P.H. Balboa Point, Avenida Balboa y Calle 40</p>
            <p>Ciudad de Panama</p>
            {/* <p><Phone className="icon" /> +507 225-9271</p>
            <p><Mail className="icon" /> <a href="mailto:info@vtshipping.com">info@vtshipping.com</a></p> */}
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <h2>Where we operate</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1231231.1231231231!2d-0.1276474!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact