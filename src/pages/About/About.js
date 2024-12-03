import React from "react";
import "./About.css";

function About() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <h2>Rottank operates a modern fleet of around 50 unique vessels</h2>
        <div className="info-box">
          <h3>
            VT is an independent company with committed employees. Many have
            been living a maritime existence from generation to generation.
          </h3>
          <p>
            Rottank has an ultramodern fleet of more than 30 unique ships.
            Varying from 210 MT (MTS Velden) to 13500 MT (MTS Vorstenbosch |
            Largest inland tanker in the World)kkkdld
          </p>
        </div>
      </div>
      <div class="container">
        <div class="core-values">
          <h1>Core Values</h1>
          <p>
            VT is a reliable, independent tanker shipping company that operates
            worldwide in both inland and sea shipping while striving for and
            maintaining the following values:
          </p>
          <div class="values-grid">
            <div class="value-card">
              <img src="integrity-icon.png" alt="Integrity" />
              <h2>Integrity</h2>
              <p>
                Ensuring the continuous development of our employees to support
                the company's safety and continuity.
              </p>
            </div>
            <div class="value-card">
              <img src="innovation-icon.png" alt="Innovation" />
              <h2>Innovation</h2>
              <p>
                Providing innovative solutions for current and future customer
                needs.
              </p>
            </div>
            <div class="value-card">
              <img src="independence-icon.png" alt="Independence" />
              <h2>Independence</h2>
              <p>
                Maintaining operational autonomy in delivering high-quality
                services.
              </p>
            </div>
            <div class="value-card">
              <img src="safety-icon.png" alt="Safety" />
              <h2>Safety</h2>
              <p>
                Prioritizing the safety of our employees, assets, and
                operations.
              </p>
            </div>
            <div class="value-card">
              <img src="sustainability-icon.png" alt="Sustainability" />
              <h2>Sustainability</h2>
              <p>
                Ensuring sustainable practices to protect the environment and
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
