import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  {
    title: "ZERO SPILLS | NO INCIDENTS",
    subtitle: "RESPECTED INLAND TANKER OPERATOR",
    image: "/assets/pic-11.jpg", // Path relative to the `public` folder
  },
  {
    title: "GLOBAL MARITIME EXCELLENCE",
    subtitle: "YOUR TRUSTED PARTNER IN MARITIME LOGISTICS",
    image: "/assets/pic-6.jpg", // Path relative to the `public` folder
  },
  {
    title: "SUSTAINABLE OPERATIONS",
    subtitle: "COMMITTED TO ENVIRONMENTAL RESPONSIBILITY",
    image: "/assets/pic-7.jpg", // Path relative to the `public` folder
  },
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
    <div
      className="home-section"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
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
