import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Specialized in maritime transport,<br />bunkering and fleet management</h1>
        </div>
      </section>

      {/* Info Box */}
      <div className="info-box">
        <p className="main-description">
          We are an international tanker shipping company specialized in the transport and 
          bunkering of mineral oils, chemical products, (bio-)fuels and lubrication oil.
        </p>
        <p className="secondary-description">
          In addition to transport of chemicals and fuel supply, we also specialize in fleet management for ship owners.
        </p>
      </div>

      <div className="service-indicators">
        <div className="indicator blue"></div>
        <div className="indicator blue"></div>
        <div className="indicator green"></div>
        <div className="indicator black"></div>
      </div>

      {/* Bunkering Section */}
      <section className="bunkering-section">
        <h2>Bunkering</h2>
        <h3>VT has traditionally been one of the largest players in bunkering.</h3>
        <p>
          We have been supplying large seagoing vessels with various fuels and lubricants 
          for more than a century. Since 2016, the option to bunker caustic soda (intended for 
          scrubbers) has been added to our offering. We are now active in the ARA area 
          (including Vlissingen, Moerdijk and IJmuiden), as well as in Panama, Spain and Oman.
        </p>
      </section>

      {/* Transportation Section */}
      <section className="transportation-section">
        <div className="overlay">
          <h2>Transportation</h2>
          <h3>
            We take care of the transport of both white and black mineral products,
            biofuels and chemical products for several parties.
          </h3>
          <p>
            These transports vary by location and usually involve transporting raw materials 
            for chemical plants or moving products to storage or refineries.
          </p>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section className="fleet-section">
        <h2>Fleet management</h2>
        <h3>
          VT has many years of experience with fleet management for ship owners
          or other third parties.
        </h3>
        <p>
          We can offer ship owners a wide range of services, consultancy and advice,
          thanks to our knowledge of commercial, technical, crew and quality management
        </p>
      </section>
    </div>
  )
}

export default Services