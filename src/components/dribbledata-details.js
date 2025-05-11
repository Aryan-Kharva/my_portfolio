import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import dribbleImage from '../assets/images/project4.png';

const DribbleDataDetails = () => {
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
            <img src={dribbleImage} alt="DribbleData" className="img-fluid" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
          </motion.div>

          <motion.div
            className="detail-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="detail-title">DribbleData</h1>
            <div className="detail-meta">
              <span>NBA Analytics</span>
              <span>Full Stack</span>
            </div>
            <p className="detail-desc">
              DribbleData is a full-stack NBA analytics app built for basketball fans and stat geeks. Users can explore recent player performance, compare two players head-to-head, and interact with dynamic stat visualizations powered by Chart.js and Flask.
            </p>
            <ul className="detail-features">
              <li>Search and visualize last 5 games for any NBA player</li>
              <li>Compare two players side-by-side with interactive bar charts</li>
              <li>Real-time autocomplete suggestions from nba_api</li>
              <li>User auth system with signup/login/logout flow</li>
              <li>Built-in chatbot powered by OpenAI GPT for Q&A</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> Python (Flask), Chart.js, HTML/CSS, JavaScript, nba_api, OpenAI API, SQLite
            </p>
            <a 
              href="https://github.com/Aryan-Kharva/DribbleData"
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
            DribbleData was my senior capstone project, developed in collaboration with three other students — Piyush Patil, Kevin Amanna, and Brian Cruz. Our goal was to create a web app that makes NBA analytics more accessible and visually engaging for fans. I focused on both backend functionality and frontend UX, while working closely with my teammates to integrate APIs, refine features, and ensure a smooth user experience.
          </p>

          <h3>Design & Functionality</h3>
          <p>
            I created a clean, dark-mode interface using Tailwind-inspired utility classes and custom CSS. The homepage uses a player carousel that lets logged-in users quickly jump into player stats. Charts are rendered dynamically with Chart.js and expand on click for better viewing.
          </p>

          <p>
            A major highlight is the player comparison page — users can enter two names and view bar charts showing their last 5 playoff game stats side by side.
          </p>

          <h3>Extra Features</h3>
          <p>
            I added login and signup functionality with hashed password storage using Flask-Login and SQLAlchemy. I also integrated an OpenAI-powered assistant that lives in the corner of the app, helping users ask questions about NBA stats or features.
          </p>

          <p>
            This project really sharpened my skills with REST APIs, data handling in Python, and front-to-back user flow in web apps.
          </p>
        </div>
      </section>
    </>
  );
};

export default DribbleDataDetails;
