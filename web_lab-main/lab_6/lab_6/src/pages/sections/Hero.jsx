import React from 'react';
import img1 from '../../pages/sections/img_1.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={img1} alt="B2 stealth bomber" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Military Aircraft</h1>
        <p className="hero-description">
          Discover the world of military aircraft, exploring their power, speed, and advanced technology.
        </p>
        <a href="/" className="hero-button">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
