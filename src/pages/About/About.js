import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        
        <div className="hero-text">
          <h1>
            VT is a reliable, independent tanker shipping company with a global presence
          </h1>
        </div>
        <div className="blue-box">
          <p>
            VT is an independent company with committed employees. Many have been
            living a maritime existence from generation to generation.
          </p>
          <p>
            Through innovative and reliable services, VT offers optimal support
            for transport and bunkering with highly trained personnel and impeccable equipment. VT is mainly active in European waters (ARA area, all Rhine river states and Sweden) and also has operations in Panama, Spain, and Oman.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Core Values</h2>
        <div className="values">
          <div className="value">
            <h3>Integrity</h3>
            <p>
              Ensuring the continuous development of our employees so that they
              are committed to the development of the company, its general
              safety and its continuity.
            </p>
          </div>
          <div className="value">
            <h3>Innovation</h3>
            <p>
              Providing innovative solutions for the wishes and needs of our
              current and future customers, for now and for the longer term,
              whereby a long-term professional cooperation is of paramount
              importance to us.
            </p>
          </div>
          <div className="value">
            <h3>Independence</h3>
            <p>
              Holding safety as an absolute priority on board, in the office and
              while carrying out our core activities.
            </p>
          </div>
          <div className="value">
            <h3>Safety</h3>
            <p>
              Operating on the basis of integrity, respect, and security with a
              focus on long-term relationships.
            </p>
          </div>
          <div className="value">
            <h3>Sustainability</h3>
            <p>
              Remaining an industry leader in the field of quality and
              sustainability in the performance of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-carousel">
          <img
            src="/path/to/partner1.png" // Replace with the actual image path
            alt="Partner 1"
          />
          <img
            src="/path/to/partner2.png" // Replace with the actual image path
            alt="Partner 2"
          />
          <img
            src="/path/to/partner3.png" // Replace with the actual image path
            alt="Partner 3"
          />
        </div>
      </section> */}
    </div>
  );
};

export default About;
