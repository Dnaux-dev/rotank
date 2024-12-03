


import React from 'react'
import './Home.css'
import Section from './Section'

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">
              Rottank operates a modern fleet of around 50 unique vessels
            </h1>

            <div className="info-box">
              <p>
                <span className="font-semibold">Rottank has an </span>
                <span className="highlight">ultramodern</span>
                <span className="font-semibold"> fleet of more than 30 </span>
                <span className="highlight">unique ships</span>.
              </p>
              <p>
                Varying from 210 MT (MTS Velden) to 13500 MT (MTS Vorstenbosch | Largest inland tanker in the World).
              </p>
              <p>
                Our ships are equipped with heating coils and modern radar systems for measuring the tank contents.
              </p>
              <p>
                The mineral vessels are equipped with a hydraulic bunker boom. Five of these ships are also equipped with a Mass Flow Meter system certified by the NMI.
              </p>
              <p>
                The lubricating oil vessels are also equipped with a hydraulic bunker boom and often equipped with Positive Displacement meters certified by the NMI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section />
    </div>

  )
}

export default Home

