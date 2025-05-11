import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/aboutme.css';
import profilePic from '../assets/images/profile.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Personal carousel images
import personal1 from '../assets/images/personal1.jpg';
import personal2 from '../assets/images/personal2.jpg';
import personal3 from '../assets/images/personal3.jpg';
import personal4 from '../assets/images/personal4.jpg';
import personal5 from '../assets/images/personal5.jpg';
import personal6 from '../assets/images/personal6.jpg';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    ‹
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    ›
  </div>
);

const AboutMe = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container about-content-grid">
        <motion.div
          className="about-photo"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={profilePic} alt="Aryan Kharva" className="profile-img" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="about-title">About Me</h1>
          <p>
            I'm Aryan Kharva, a Computer Science student at UNC Charlotte with a concentration in Web/Mobile Development & Software Engineering. My love for building started as a kid with Lego sets, Minecraft worlds, and woodworking — anything that let me design and problem-solve creatively. That passion turned into purpose when I started taking computer science classes in high school, thanks to the inspiration of my teacher, Dr. Alex Kaulfuss.
          </p>
          <p>
            I explored every corner of the field — from cybersecurity and data science to cloud computing and AI — because I believe in trying before judging. That led me to discover what I truly enjoy: building smart, beautiful tools with web technologies and generative AI.
          </p>
          <p>
            I'm currently doing undergraduate research working on a RAG model using Llama 2 and OpenAI APIs. I’m a three-time Chancellor’s List recipient (Spring 2024, Fall 2024, and Spring 2025) and constantly looking for ways to grow as a developer and a person.
          </p>
          <p className="resume-link-wrapper">
            🔗 <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-resume-link"
            >
              View My Resume
            </a>
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="container personal-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="personal-title">Beyond the Code</h2>
        <p>
          I’m more than just my resume. I still build LEGO sets — especially Star Wars ones — and I’ll defend The Clone Wars as peak Star Wars to anyone who asks. Star Wars has always inspired my creativity and love of storytelling.
        </p>
        <p>
          I also love trying new foods, discovering underrated restaurants, and spending quality time with family and friends. Whether it’s late-night boba runs, spontaneous road trips, or backyard bonfires — these moments fuel me as much as my projects do.
        </p>
        <p>
          I bring that same spirit into my work: curious, thoughtful, and driven to build things that bring joy, clarity, or just a touch of wow.
        </p>

        <Slider {...sliderSettings} className="personal-carousel">
          {[
            { img: personal3, caption: "The class that started it all — AP CSA, 2021" },
            { img: personal6, caption: "Still building — just traded bricks for code." },
            { img: personal5, caption: "My foundation — the people who keep me grounded, motivated, and smiling." },
            { img: personal4, caption: "Stepping away from the screen to gain a new perspective." },
            { img: personal2, caption: "Catching a show to refuel my creativity." },
            { img: personal1, caption: "Always down to meet other llamas — this one just doesn’t do AI." }
          ].map((item, i) => (
            <div key={i} className="carousel-image-wrapper">
              <div className="carousel-overlay-container">
                <img src={item.img} alt={`Personal ${i}`} className="carousel-image" />
                <div className="carousel-caption">{item.caption}</div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
