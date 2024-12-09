import React from 'react';
import './Home.css';

function GlobalMaritime() {
  return (
    <section className="global-maritime">
      <div className="container">
        <div className="content">
          <h2>Rotank Logistic Services</h2>
          <p>Rotank has always been a respected and well-known inland tanker operator ever since its foundation in 1916.</p>
          <p>Rotank today has built on a proven track record of more than 100 years experience in the maritime logistics and bunkering industry, steadily growing into a global leader.</p>
          <p>Since 2000, Rotank has been active in Panama under the flag of Rotank Shipping and with the acquisition of Ridout Tankers in 2020, the Rotank Group has grown into a large international shipowner with operations in the USA region, Panama, Greek, Sweden, Spain, the Canary Islands and in the river Rhine.</p>
          <div className="buttons">
            <button className="btn btn-primary">READ ABOUT Rotank</button>
            <button className="btn btn-secondary">OUR SERVICES</button>
            <button className="btn btn-secondary">WHERE WE OPERATE</button>
          </div>
        </div>
        <div className="map-container">
          <div className="map-glow"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png" alt="World Map" className="world-map" />
        </div>
      </div>
    </section>
  );
}

export default GlobalMaritime;

