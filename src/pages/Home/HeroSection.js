import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  {
    title: "ZERO SPILLS | NO INCIDENTS",
    subtitle: "RESPECTED INLAND TANKER OPERATOR",
    image: "https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "GLOBAL MARITIME EXCELLENCE",
    subtitle: "YOUR TRUSTED PARTNER IN MARITIME LOGISTICS",
    image: "https://images.unsplash.com/photo-1566902249079-c97d67671278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "SUSTAINABLE OPERATIONS",
    subtitle: "COMMITTED TO ENVIRONMENTAL RESPONSIBILITY",
    image: "https://images.unsplash.com/photo-1611526114392-8d8e229f511c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section" style={{backgroundImage: `url(${slides[currentSlide].image})`}}>
      <div className="container">
        <div className="hero-title-container">
          <p className="hero-title">{slides[currentSlide].title}</p>
        </div>
        <div className="hero-subtitle-container">
          <h2>{slides[currentSlide].subtitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

