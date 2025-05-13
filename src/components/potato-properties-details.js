import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import potatoImage from '../assets/images/project3.png';
import figma2 from '../assets/images/figma2.png';
import potatoHome from '../assets/images/potato_home.png';

const PotatoPropertiesDetails = () => {
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
            <img
              src={potatoImage}
              alt="Potato Properties"
              className="img-fluid"
              style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
          </motion.div>

          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="detail-title">Potato Properties</h1>
            <div className="detail-meta">
              <span>Property Comparison Tool</span>
              <span>Team Project</span>
            </div>
            <p className="detail-desc">
              Potato Properties is a full-stack property comparison platform developed by a team of students. It allows users to browse, compare, and save property listings in a clean, responsive interface. The project aimed to simplify property shopping by enabling side-by-side comparisons of key features and pricing.
            </p>
            <ul className="detail-features">
              <li>Search and compare properties by criteria like price and room count</li>
              <li>Favorites system for saving listings</li>
              <li>Responsive layout optimized for all devices</li>
              <li>Modular backend routes and templates</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, JavaScript, CSS
            </p>
            <a
              href="https://github.com/Aryan-Kharva/potato-properties"
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
            This was a collaborative effort between team members, with responsibilities split across features like search, compare, and saved listings. I led the initial design process and frontend structure.
          </p>
<br></br>
          <h3>Design Process</h3>
          <p>
            I kicked off our team project by drafting the layout and structure in Figma. This helped align our group on what pages we needed, how the flow should work, and how to visually present search results, comparisons, and saved properties. It acted as the blueprint before we started coding together.
          </p>

          <div className="project-inline-image">
            <div className="project-inline-wrapper">
              <img
                src={figma2}
                alt="Potato Properties Figma wireframe"
                className="project-sub-image"
              />
              <p className="project-image-caption">
                Initial Figma wireframe created to guide feature layout and team development
              </p>
            </div>
          </div>
<br></br>
          <h3>Key Features</h3>
          <ul className="project-bullets">
            <li>Compare multiple properties side-by-side with interactive toggling</li>
            <li>Property search with filtering by price, number of rooms, and type</li>
            <li>Favorites/saved properties with persistent local state</li>
            <li>Modular design using EJS templates and custom backend logic</li>
            <li>Fully responsive layout built with CSS Grid and Flexbox</li>
            <li>Team collaboration using Git for version control and component-based division of work</li>
          </ul>

          <div className="project-inline-image">
            <div className="project-inline-wrapper">
              <img
                src={potatoHome}
                alt="Potato Properties home page screenshot"
                className="project-sub-image"
              />
              <p className="project-image-caption">
                Home page — users can browse available properties and filter listings
              </p>
            </div>
          </div>
<br></br>
          <h3>Challenges</h3>
          <p>
            Coordinating multiple contributors on a team project came with its own set of challenges. Merging code, organizing Git branches, and keeping consistent styling across pages was a learning experience. On the technical side, implementing the comparison logic and ensuring clean UI updates without overlap took some trial and error.
          </p>
<br></br>
          <h3>What I Learned</h3>
          <p>
            Potato Properties taught me how to work in a collaborative development environment. I got hands-on experience turning a Figma mockup into a working site, while also improving my skills in responsive design, modular coding, and conflict resolution in version control. It gave me confidence to contribute both visually and technically to team-based projects.
          </p>
        </div>
      </section>
    </>
  );
};

export default PotatoPropertiesDetails;
