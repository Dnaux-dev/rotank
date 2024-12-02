import React from 'react';
import './Home.css';

// Sample data - replace with your actual data
const vessels = [
  { id: 1, name: "Angelique", country: "Dutch", image: "/" },
  { id: 2, name: "Anna", country: "Dutch", image: "/" },
  { id: 3, name: "California", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
  { id: 4, name: "Chris", country: "Dutch", image: "/" },
];

const countries = ["All", "Dutch", "German", "Panama", "Spain"];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vesselFilter: "",
      countryFilter: "All"
    };
  }

  handleVesselFilterChange = (event) => {
    this.setState({ vesselFilter: event.target.value });
  }

  handleCountryFilterChange = (country) => {
    this.setState({ countryFilter: country });
  }

  render() {
    const filteredVessels = vessels.filter((vessel) => {
      const matchesName = vessel.name.toLowerCase().includes(this.state.vesselFilter.toLowerCase());
      const matchesCountry = this.state.countryFilter === "All" || vessel.country === this.state.countryFilter;
      return matchesName && matchesCountry;
    });

    return (
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

            <div className="fleet-list-header">
              <h2 className="fleet-list-title">Fleet list</h2>
              <button className="download-button">
                <span className="download-icon">⬇️</span>
                Download fleet list
              </button>
            </div>

            <div className="filter-section">
              <input
                type="text"
                placeholder="Filter by Vessel"
                className="vessel-filter"
                value={this.state.vesselFilter}
                onChange={this.handleVesselFilterChange}
              />
              <div className="country-filters">
                {countries.map((country) => (
                  <button
                    key={country}
                    className={`country-filter ${this.state.countryFilter === country ? 'active' : ''}`}
                    onClick={() => this.handleCountryFilterChange(country)}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            <div className="ship-grid">
              {filteredVessels.map((vessel) => (
                <div key={vessel.id} className="ship-card">
                  <img
                    src={vessel.image}
                    alt={vessel.name}
                    className="ship-image"
                  />
                  <div className="ship-info">
                    <h3 className="ship-name">{vessel.name}</h3>
                    <p className="ship-country">{vessel.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

