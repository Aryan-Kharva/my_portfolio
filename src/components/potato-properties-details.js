import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import potatoImage from '../assets/images/project3.png';

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
            <img src={potatoImage} alt="Potato Properties" className="img-fluid" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
          </motion.div>

          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="detail-title">Potato Properties</h1>
            <div className="detail-meta">
              <span>Apartment Management</span>
              <span>Full Stack</span>
            </div>
            <p className="detail-desc">
              Potato Properties is a collaborative apartment management web application designed to streamline rental workflows for both tenants and landlords. Users can browse properties, apply online, track maintenance requests, and view dashboards tailored to their role.
            </p>
            <ul className="detail-features">
              <li>Tenant and manager dashboards with role-based views</li>
              <li>Online property applications and request forms</li>
              <li>User login, registration, and session handling</li>
              <li>Full CRUD for listings, leases, and service requests</li>
              <li>Collaborative GitHub and Trello-based development process</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, CSS, JavaScript
            </p>
            <a 
              href="https://github.com/jlowe093/ITIS3300-GroupProject"
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
            This was a collaborative team project I worked on with five classmates as part of our software engineering coursework. I contributed heavily on both the frontend and backend — developing routes, building EJS templates, and working on session logic and form handling.
          </p>

          <h3>Development Process</h3>
          <p>
            We planned the entire project using a shared Trello Kanban board and regularly split up tasks in sprints. From the database models to route handlers, we applied full-stack principles using Express, MongoDB, and modular EJS components.
          </p>

          <p>
            My contributions included form validation middleware, property application flow, dashboard views, and helping unify the visual styling across the app using consistent CSS layouts.
          </p>

          <h3>Lessons Learned</h3>
          <p>
            This project helped me grow as both a developer and a teammate. I learned how to contribute to a shared codebase effectively, resolve merge conflicts, and translate real-world requirements into working code under deadlines.
          </p>
        </div>
      </section>
    </>
  );
};

export default PotatoPropertiesDetails;
