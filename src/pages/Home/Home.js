import React from "react";
import "./Home.css";
import LatestNews from "./LatestNews";

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
  { id: 4, name: "Chris", country: "Dutch", image: "/" }
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
  };

  handleCountryFilterChange = (country) => {
    this.setState({ countryFilter: country });
  };

  render() {
    const filteredVessels = vessels.filter((vessel) => {
      const matchesName = vessel.name
        .toLowerCase()
        .includes(this.state.vesselFilter.toLowerCase());
      const matchesCountry =
        this.state.countryFilter === "All" ||
        vessel.country === this.state.countryFilter;
      return matchesName && matchesCountry;
    });

    return (
      <section>
        <div className="hero-section">
          <div className="container">
            <div className="hero-title-container">
               <p className="hero-title">Zero spills | No incidents</p>
            </div>
            <div className="hero-subtitle-container">
              <h2>Your Trusted Partner in Maritime Logistics Services</h2>
            </div>
          </div>
        </div>
        <LatestNews />
      </section>
    );
  }
}

export default Home;
