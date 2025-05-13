import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import spinCityImage from '../assets/images/project1.png';
import canvaScreenshot from '../assets/images/canva1.png';
import figmaScreenshot from '../assets/images/figma1.png';

const SpinCityDetails = () => {
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
            <img src={spinCityImage} alt="Spin City Market" className="img-fluid" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
          </motion.div>

          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="detail-title">Spin City Market</h1>
            <div className="detail-meta">
              <span>Vinyl Marketplace</span>
              <span>Full Stack</span>
            </div>
            <p className="detail-desc">
              Spin City Market is a full-stack web application where users can browse, list, and manage vinyl record listings. It provides a dynamic online marketplace for vinyl enthusiasts to discover new records, post their own for sale, and manage listings with ease.
            </p>
            <ul className="detail-features">
              <li>Create listings with images and detailed info (title, artist, condition, price)</li>
              <li>Search functionality with keyword filters</li>
              <li>Edit, soft delete, and manage records</li>
              <li>Secure image upload with multer</li>
              <li>Styled with EJS templates and custom CSS</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, CSS, Multer
            </p>
            <a 
              href="https://github.com/Aryan-Kharva/spin_city_market"
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
      As someone who’s always been passionate about music, I knew I had to channel that into a project. Spin City Market was born from that love—my way of combining tech with my interests. I wanted to build something music-related, so I created a vinyl record marketplace where users could explore, list, and manage their collections.
    </p>
    <br></br>
    <h3>Design Process</h3>
    <p>
      I began by creating the logo using Canva. I wanted something simple yet catchy to represent the vinyl niche.
    </p>
    <img src={canvaScreenshot} alt="Canva logo design screenshot" className="project-sub-image" />
    <br></br><br></br>
    <p>
      After finalizing the branding, I moved into Figma to plan out the site’s UI/UX. This helped me map out the page structure and interactions before diving into code.
    </p>
    <img src={figmaScreenshot} alt="Figma design wireframe" className="project-sub-image" />
    <br></br>    <br></br>
    <h3>Development</h3>
    <p>
      I built the full-stack application using what I learned in my Network-Based Application Development course at UNC Charlotte. This course gave me a solid understanding of REST APIs, Express routing, and database connectivity, which I applied directly to this project.
    </p>

    <p>
      Every feature—from listing creation to secure image uploads—was an opportunity to practice and refine my skills. Spin City Market became more than just a fun build; it became a personal milestone.
    </p>
    <br></br>
    <h3>Key Features</h3>
    <ul className="project-bullets">
      <li>Full CRUD for vinyl listings including image upload, editing, and soft deletion</li>
      <li>Search functionality with dynamic keyword filtering using query strings</li>
      <li>Modular EJS templates for reusable layout and cleaner code</li>
      <li>Responsive design using custom CSS for desktop and mobile views</li>
      <li>Multer-based image upload system with file validation</li>
      <li>MongoDB integration using Mongoose for schema definition and database operations</li>
    </ul>
    <div className="project-inline-image">
  <img
    src={require('../assets/images/browse.png')}
    alt="Browse page screenshot"
    className="project-sub-image"
  />
  <p className="project-image-caption">Browse page — users can explore all vinyl listings and filter by keyword</p>
</div>



    <br></br>
    <h3>Challenges</h3>
    <p>
      One of the trickiest parts was setting up image uploads. Getting Multer to work correctly with file types, storage settings, and rendering uploaded files dynamically took a lot of trial and error. I also ran into some roadblocks connecting to MongoDB initially and had to troubleshoot local vs cloud connections during development.
    </p>
    <br></br>
    <h3>What I Learned</h3>
    <p>
      This was my first full-stack web app, so I learned a ton about Express routing, middleware, environment variables, and MVC structure. More importantly, I realized how much I enjoy bringing everything together — from UI and styling to database logic and debugging. It gave me confidence that I can independently scope, build, and ship a complete web application.
    </p>
  </div>
</section>


      
    </>
  );
};

export default SpinCityDetails;
