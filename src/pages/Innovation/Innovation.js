import React from 'react'
import './Innovation.css'

function Innovation() {
  return (
    <div className="innovation-container">
    {/* Mass Flow System Section */}
    <section className="mass-flow-intro section-gray">
      <div className="content-wrapper">
        <h2>VT's MTS Vlaardingen was the first ship in the world with a certified mass flow system on board (2010).</h2>
        <p>
          Since then there have been many developments and VT has introduced the system on other vessels. VT
          has a co-operation with the two leading companies in the field of Coriolis Mass Flow
          Systems; Emerson Process Management and Endress+Hauser for this technology.
        </p>
        <p>
          The Dutch Metrology Institute (NMI), has independently certified and sealed these on-board systems to
          guarantee an accurate, reliable system based on the global measurement standards OIML R117 and
          MID Europe. This also ensures compliance with European legislation on transfer of ownership (custody
          transfer)
        </p>
      </div>
    </section>

    {/* Telemetry Section */}
    <section className="telemetry-section">
      <div className="content-wrapper">
        <h2>Telemetry</h2>
        <p>
          The new generation of VT ships has telemetry points, making it possible to monitor the entire ship online and even steer it in case of an emergency. The crew can fully control and monitor the ship from the wheelhouse, which can greatly improve safety.
        </p>
        <p>
          For training purposes and incident investigation, the ship can print out a report itself, which can be supported by camera images, sound recordings and radar images. VDR data is used for preventive maintenance, performance review, incident investigation and training purposes, among other things.
        </p>
        <div className="feature-tag">
          <span>Online Telemetry Diagnostics System</span>
        </div>
      </div>
    </section>

    {/* Innodox Automooring Section */}
    <section className="automooring-section">
      <div className="content-wrapper">
        <div className="automooring-grid">
          <div className="text-content">
            <h2>Innodox Automooring</h2>
            <h3>
              Mooring vessels is statistically one of the most dangerous operations for the ship and her crew. For bunkering, ship-to-ship mooring is the most common situation.
            </h3>
            <p>
              The risks associated with mooring are overcome by a well-trained crew and closely monitored procedures, but VT has also focused on eliminating the use of mooring lines. Without mooring lines, there is no longer a physical need for a crew member to moor and the greatest safety risk is removed.
            </p>
            <p>
              The intelligent docklocking system (IDL) is 'automooring' technology developed in collaboration with Industries, where by means of hydraulic arms, a magnetic or vacuum connection is made coupling with the ship's hull. In addition to being safer, this is also many times faster.
            </p>
          </div>
          <div className="image-container">
            <img src="/path-to-ship-image.jpg" alt="Container ship" className="ship-image" />
          </div>
        </div>

        <div className="improvements-section">
          <h3>In summary, an automooring system brings the following improvements:</h3>
          <div className="improvements-grid">
            <div className="improvement-card">
              {/* <Shield className="icon" /> */}
              <h4>Safety</h4>
              <p>Without mooring lines, there is no longer a physical need for a crew member to moor, removing the greatest safety risk.</p>
            </div>
            <div className="improvement-card">
              {/* <Clock className="icon" /> */}
              <h4>Efficiency</h4>
              <p>At the push of a button the system connects and disconnects and mooring becomes a matter of minutes.</p>
            </div>
            <div className="improvement-card">
              {/* <Cog className="icon" /> */}
              <h4>Durability</h4>
              <p>Faster mooring means an earlier shut-off for the engines. This saves fuel cost and reduces emissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mass Flow Meter System Section */}
    <section className="mass-flow-section section-gray">
      <div className="content-wrapper">
        <h2>Mass flow meter system</h2>
        <p>
          The certified Coriolis Massflow measurement system is a well-established innovation in the field of load transfer measurement. It is based on the simultaneous measurement of mass flow, density, temperature and viscosity to provide an extremely accurate indication of exactly how much charge has been transferred.
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Coriolis Flow Meter Theory of Operation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>

    {/* Innovation Partnership Section */}
    <section className="partnership-section">
      <div className="hero-content">
        <h2>VT develops innovative and advanced applications with clients and partners.</h2>
      </div>
      <div className="info-box">
        <div className="content-wrapper">
          <p>
            In addition to building ships with the latest technical solutions, VT regularly develops and devises advanced and innovative applications in cooperation with its customers and partners.
          </p>
          <p>
            For example, the consequences of autonomous ships are considered far ahead of this reality coming into existence; how will vessels moor; how are they loaded and off-loaded? Short-term changes with a high global priority, such as emission reductions and the use of alternative fuels for our propulsion, are also analyzed in order to come up with concrete solutions.
          </p>
          <p>
            In addition to the high-tech equipment on the ships themselves, the information provision and order processing are also continuously optimized using our ICT infrastructure and automation.
          </p>
        </div>
      </div>
      <div className="cta-box">
        <h3>Would you like to know more about the possibilities and solutions that VT can offer you?</h3>
        <button className="contact-button">Contact us</button>
      </div>
    </section>

    {/* Sustainability Section */}
    <section className="sustainability-section">
      <div className="content-wrapper">
        <div className="sustainability-grid">
          <div className="image-container">
            <img src="/path-to-globe-image.jpg" alt="Hands holding glowing globe" className="globe-image" />
          </div>
          <div className="text-content">
            <h2>Sustainable & responsible</h2>
            <p>
              VT Group values safety and sustainability with great importance. Our internal safety procedures and systems are based on our "zero spills – no incidents" objectives. Because we are accredited and certified according to the highest quality standards current oil majors, chemical conglomerates and major shipping companies consistently select our services.
            </p>
            <p>
              The VT Group has also set itself the goal of being at the forefront of the energy transition for shipping, with a focus on the switch from fossil fuels to biofuels, with the wish to contribute to the reduction of CO2 emissions.
            </p>
            <div className="values-grid">
              <div className="value-item">
                {/* <Award className="icon" /> */}
                <span>Quality</span>
              </div>
              <div className="value-item">
                {/* <ShieldCheck className="icon" /> */}
                <span>Safety</span>
              </div>
              <div className="value-item">
                {/* <Leaf className="icon" /> */}
                <span>Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Innovation