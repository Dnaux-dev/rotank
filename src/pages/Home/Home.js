import React from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import GlobalMaritime from './GlobalMaritime';
import Sustainability from './Sustainability';
import LatestNews from './LatestNews';

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <GlobalMaritime />
      <Sustainability />
      <LatestNews />
    </div>
  );
}

export default Home;

