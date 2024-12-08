import React from "react";
import "./Innovation.css";
// import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'react-icons/lu'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiStrongMan } from "react-icons/gi";
import { SiRelianceindustrieslimited } from "react-icons/si";

function Innovation() {
  return (
    <div className="innovation-container">
      <section className="innovation-hero-section">
        <div className="innovation-hero-content">
          <h1>
            Rottank develops innovative and advanced applications with clients
            and partners
          </h1>
        </div>
        <div className="innovation-content-wrapper-4">
          <div className="innovation-content-5">
            <h3>
              In addition to building ships with the latest technical solutions,
              Rottank regularly develops and devises advanced and innovative
              applications in cooperation with its customers and partners.
            </h3>
            <p>
              For example, the consequences of autonomous ships are considered
              far ahead of this reality coming into existence; how will vessels
              moor, how are they loaded and off-loaded? Short-term changes with
              a high global priority, such as emission reductions and the use of
              alternative fuels for our propulsion, are also analyzed in order
              to come up with concrete solutions.
            </p>
            <p>
              In addition to the high-tech equipment on the ships themselves,
              the information provision and order processing are also
              continuously optimized using our ICT infrastructure and
              automation.
            </p>
          </div>
        </div>

        <div className="innovative-contact">
          <h3>
            Would you like to know more about the possibilities and solutions
            that Rottank can offer you?
          </h3>
          <div className="innovative-icons">
            <a href="#"> contact us </a>
          </div>
        </div>
      </section>
      <div className="service-indicators">
        <div className="indicator blue"></div>
        <div className="indicator blue"></div>
        <div className="indicator green"></div>
        <div className="indicator black"></div>
      </div>
      <div className="background-attachment background"></div>

      <div className="innovation-info-box"></div>
  
      <div className="blur"></div>

      {/* Innodox Automooring Section */}
      <section className="automooring-section">
        <div className="automooring-content-wrapper">
          <h2>Innodox Automooring</h2>
          <div className="automooring-grid">
            <div className="automooring-text-content">
              <h3>
                Mooring vessels is statistically one of the most dangerous
                operations for the ship and her crew. For bunkering,
                ship-to-ship mooring is the most common situation.
              </h3>
              <p>
                The risks associated with mooring are overcome by a well-trained
                crew and closely monitored procedures, but Rottank has also focused
                on eliminating the use of mooring lines. Without mooring lines,
                there is no longer a physical need for a crew member to moor and
                the greatest safety risk is removed.
              </p>
              <p>
                The intelligent docklocking system (IDL) is 'automooring'
                technology developed in collaboration with Industries, where by
                means of hydraulic arms, a magnetic or vacuum connection is made
                coupling with the ship's hull. In addition to being safer, this
                is also many times faster.
              </p>
            </div>
            <div className="image-container">
              <img
                src="/assets/pexels-tomfisk-3856438.jpg"
                alt="Containers ship"
                className="ship-image"
              />
            </div>
          </div>

          <div className="improvements-section">
            <h3>
              In summary, an automooring system brings the following
              improvements:
            </h3>
            <div className="improvements-grid">
              <div className="improvement-card">
                {/* <Shield className="icon" /> */}
                <h1>
                  <AiOutlineSafetyCertificate />
                </h1>
                <h4>Safety</h4>
                <p>
                  Without mooring lines, there is no longer a physical need for
                  a crew member to moor, removing the greatest safety risk.
                </p>
              </div>
              <div className="improvement-card">
                {/* <Clock className="icon" /> */}
                <h1>
                  <SiRelianceindustrieslimited />
                </h1>
                <h4>Efficiency</h4>
                <p>
                  At the push of a button the system connects and disconnects
                  and mooring becomes a matter of minutes.
                </p>
              </div>
              <div className="improvement-card">
                <div className="icon" />
                <h1>
                  <GiStrongMan />
                </h1>
                <h4>Durability</h4>
                <p>
                  Faster mooring means an earlier shut-off for the engines. This
                  saves fuel cost and reduces emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Flow Meter System Section */}
      <section className="mass-meter-cover">
        <div className="mass-meter-content">
          <h2>Mass flow meter system</h2>
          <p>
            The certified Coriolis Massflow measurement system is a
            well-established innovation in the field of load transfer
            measurement. It is based on the simultaneous measurement of mass
            flow, density, temperature and viscosity to provide an extremely
            accurate indication of exactly how much charge has been transferred.
          </p>
          <div className=" mass-flow-video-container">
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
      <section className="innovation-partnership-section">
        <div className="innovation-partnership-content">
          <h2>
          Rottank develops innovative and advanced applications with clients and
            partners.
          </h2>
        </div>
        <div className="innovative-info-box">
          <div className="innovative-info-content-wrapper">
            <p>
              Since then there have been many developments and Rottank has introduced
              the system on other vessels. Rottank has a co-operation with the two
              leading companies in the field of Coriolis Mass Flow Systems;
              Emerson Process Management and Endress+Hauser for this technology.
            </p>
            <p>
              The Dutch Metrology Institute (NMi), has independently certified
              and sealed these on-board systems to guarantee an accurate,
              reliable system based on the global measurement standards OIML
              R117 and MID Europe . This also ensures compliance with European
              legislation on transfer of ownership (custody transfer)
            </p>
          </div>
        </div>
      </section>

      {/* Telemetry Section  */}
      <section className="telemetry-section">
        
          <h2>Telemetry</h2>
          <p>
            The new generation of Rottank ships has telemetry points, making it
            possible to monitor the entire ship online and even steer it in case
            of an emergency. The crew can fully control and monitor the ship
            from the wheelhouse, which can greatly improve safety.
          </p>
          <p>
            For training purposes and incident investigation, the ship can print
            out a report itself, which can be supported by camera images, sound
            recordings and radar images. VDR data is used for preventive
            maintenance, performance review, incident investigation and training
            purposes, among other things.
          </p>
        
            <ul>
              <li>
            
                <span class="blue"></span>
                Online Telemetry Diagnostics System
              </li>
              <li>
               
                <span class="light-blue"></span>
                Voyage Data Recording (VDR)
              </li>
              <li>
              
                <span class="beige"></span> Online CCTV Camera System
              </li>
              <li>
              
                <span class="gray"></span>
                Power Management System
              </li>
              <li>
              
                <span class="black"></span>
                Telemetry Incident Reporting
              </li>
            </ul>
         
       
      </section>

      {/* Sustainability Section */}
      <section className="innovative-sustainability-section">
        <div className="innovative -sustanability-wrap">
          <div className="sustainability-grid">
            <div className="sustainability-image-container">
              <img
                src="/assets/pexels-mattia-visconti-1801128-4146111.jpg"
                alt="Hands holding glowing globe"
                className="globe-image"
              />
            </div>
            <div className="sustainability-text-content">
              <h2>Sustainable & responsible</h2>
              <p>
              Rottank values safety and sustainability with great importance.
                Our internal safety procedures and systems are based on our
                "zero spills – no incidents" objectives. Because we are
                accredited and certified according to the highest quality
                standards current oil majors, chemical conglomerates and major
                shipping companies consistently select our services.
              </p>
            </div>
        
            <div className="sustainability-text-content">
              <p>
                Rottank has also set itself the goal of being at the
                forefront of the energy transition for shipping, with a focus on
                the switch from fossil fuels to biofuels, with the wish to
                contribute to the reduction of CO2 emissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Innovation;