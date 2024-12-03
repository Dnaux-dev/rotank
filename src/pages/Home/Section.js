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

class Section extends React.Component {
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
            <section class="fleet">
                  <div class="fleet-container">
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
            </section>
          
        );
    }
}

export default Section;

