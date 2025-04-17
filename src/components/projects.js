import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import project1Img from '../assets/images/project1.png';

const Projects = () => {
    return (
      <section id="projects" className="projects-section">
        <div className="text-center mb-5">
          <h1 className="section-title">portfolio.</h1>
          <p className="section-subtitle">
            Check out some of my latest work. These projects showcase my skills in frontend development, web architecture, and UX/UI design.
          </p>
        </div>

        <div className="projects-grid">
          {/* Spin City Market Project Card - Slide in from left */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={project1Img} alt="Spin City Market" className="project-image" />
            <div className="project-content">
              <h3 className="project-title">Spin City Market</h3>
              <p className="project-tag">Vinyl Marketplace · Full Stack</p>
              <p className="project-desc">Spin City Market is a full-stack web app where users can browse, list, and manage vinyl records. Includes image uploads, soft deletion, search functionality, and a clean UI. Built using Node.js, Express, MongoDB, EJS, and CSS.</p>

              <a href="/projects/spin-city-market" className="arrow-link">
                <span className="arrow-text">View Project</span>
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </motion.div>

          {/* Spin City Admin Dashboard Project Card - Slide in from right */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* <img src="https://via.placeholder.com/300x200" alt="Spin City Admin Dashboard" className="project-image" /> */}
            <div className="project-content">
              <h3 className="project-title">Spin City Admin Dashboard</h3>
              <p className="project-tag">Dashboard · Backend</p>
              <p className="project-desc">Coming soon: A secure dashboard for moderators to manage listings, flagged content, and user submissions within the Spin City Marketplace.</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
};

export default Projects;
