import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import threadsImage from '../assets/images/project2.png';

const BollywoodThreadsDetails = () => {
  return (
    <>
      <section className="project-detail-section full-width-offwhite shadowed-section">
        <div className="container detail-layout no-box">
          <motion.div
            className="detail-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1.2 }}
          >
            <img src={threadsImage} alt="Bollywood Threads" className="img-fluid" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
          </motion.div>

          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="detail-title">Bollywood Threads</h1>
            <div className="detail-meta">
              <span>Business Website</span>
              <span>Frontend</span>
            </div>
            <p className="detail-desc">
              Bollywood Threads is a custom-designed informational and appointment booking website created for a small Indian fashion business. It showcases traditional and modern South Asian clothing while providing a seamless online experience for customers to explore the collection and schedule personalized shopping sessions.
            </p>
            <ul className="detail-features">
              <li>Responsive website layout with modern styling</li>
              <li>Interactive photo galleries with Slick Carousel</li>
              <li>Appointment booking form with embedded validation</li>
              <li>Modular HTML structure using HTMLInclude.js</li>
              <li>"About the Owner" section to highlight the brand story</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Slick Carousel, HTMLInclude.js
            </p>
            <a 
              href="https://github.com/Aryan-Kharva/Bollywood-Threads-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              View GitHub Repository
            </a>
          </motion.div>
        </div>
      </section>

      <section className="project-extension-section">
        <div className="container">
          <h2>More About This Project</h2>
          <p>
            Bollywood Threads was one of my first client projects—created for a small business run by my mom, Vaishali Kharva. She wanted a website that could bring her vision for traditional Indian fashion into the digital space, and I knew I wanted to build something clean, elegant, and easy to use.
          </p>

          <h3>Design Process</h3>
          <p>
            I worked closely with her to understand the brand’s tone and visual identity. From layout to colors, I aimed for a modern design that still honored traditional aesthetics.
          </p>

          <p>
            I showcased lehengas, saris, and gowns using interactive image carousels, and kept the navigation minimal and user-friendly. The appointment booking form allowed potential clients to set up a personalized shopping session easily.
          </p>

          <h3>Development</h3>
          <p>
            I built the website using just HTML, CSS, and vanilla JavaScript. The galleries use Slick Carousel, and I modularized the layout using HTMLInclude.js for easier updates. The booking form also features simple client-side validation to guide users smoothly.
          </p>

          <p>
            This project helped me gain real-world experience working with a client, translating business goals into web functionality, and refining my frontend design and development workflow.
          </p>
        </div>
      </section>
    </>
  );
};

export default BollywoodThreadsDetails;
