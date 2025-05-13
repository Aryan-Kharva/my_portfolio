import React from 'react';
import '../assets/css/hero.css';
import mainImage from '../assets/images/main.png';

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center justify-content-center text-white text-center" id="home">
      <div className="hero-content">
        <h1 className="display-4">Aryan Kharva</h1>
        <p className="lead">Frontend Developer • Undergraduate Researcher • CS Student at UNC Charlotte</p>
      </div>
    </div>
  );
};

export default Hero;