import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import dribbleImage from '../assets/images/project4.png';
import dribbleChatbot from '../assets/images/dribble_chatbot.png';

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
            <img
              src={dribbleImage}
              alt="DribbleData"
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
            <h1 className="detail-title">DribbleData</h1>
            <div className="detail-meta">
              <span>NBA Stats Explorer</span>
              <span>Team Project</span>
            </div>
            <p className="detail-desc">
              DribbleData is a basketball analytics platform that lets users explore NBA stats through charts, filters, and a generative AI-powered chatbot. It was developed as a final group project combining frontend, backend, and AI integration.
            </p>
            <ul className="detail-features">
              <li>NBA stat visualizations and filters</li>
              <li>Chatbot to answer basketball questions using AI</li>
              <li>Responsive UI with clean user experience</li>
            </ul>
            <p className="detail-stack">
              <strong>Tech Stack:</strong> JavaScript, HTML/CSS, Flask, Chart.js, OpenAI API
            </p>
            <a
              href="https://github.com/Aryan-Kharva/dribbledata"
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
            DribbleData was developed as a team project for our class, combining our interests in basketball and data visualization. It allows users to explore NBA statistics through interactive charts, filters, and summaries. The project also features a custom-built AI chatbot to answer basketball-related queries.
          </p>
<br></br>
          <h3>Presentation</h3>
            <p>
              As part of our final showcase, we presented DribbleData to our classmates and professor. I demoed the chatbot feature and explained how it was integrated using the OpenAI API.
            </p>
            <div className="project-inline-image">
              <div className="project-inline-wrapper">
                <a
                  href="https://docs.google.com/presentation/d/1NICCr0dG_vvVedHdyVFWMGsKgA_Ax7Xx/edit?usp=sharing&ouid=106013390410796778067&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presentation-image-link"
                >
                  <img
                    src={require('../assets/images/dribble_slides.png')}
                    alt="Presentation cover slide"
                    className="project-sub-image dribble-presentation-image"
                  />
                </a>
                <p className="project-image-caption">Click the cover slide to view our full project presentation</p>
              </div>
            </div>


<br></br>
          <h3>My Contributions</h3>
          <p>
            I was responsible for implementing the entire chatbot feature — both frontend and backend — leveraging what I had learned from my research in generative AI. I also led the frontend development, designing the UI and layout to be clean, consistent, and responsive. In addition to my main tasks, I collaborated with teammates and helped debug issues across other areas of the site.
          </p>
<br></br>
          <h3>Key Features</h3>
          <ul className="project-bullets">
            <li>AI-powered chatbot trained to answer basketball-related queries using OpenAI</li>
            <li>Player and team statistics visualized with interactive charts</li>
            <li>Dynamic filters and dropdowns for stat categories, seasons, and teams</li>
            <li>Clean, responsive UI built with HTML, CSS, and JavaScript</li>
            <li>Collaborative development with modularized frontend/backend logic</li>
          </ul>

          <div className="project-inline-image">
            <div className="project-inline-wrapper">
            <img
              src={dribbleChatbot}
              alt="Chatbot interface screenshot"
              className="project-sub-image dribble-chatbot-image"
            />
              <p className="project-image-caption">Chatbot feature — answers player stats questions using AI integration</p>
            </div>
          </div>
<br></br>
          <h3>Challenges</h3>
          <p>
            Integrating the chatbot smoothly was tricky — especially when managing async responses from the API and rendering them properly in the chat window. We also had to troubleshoot deployment bugs and data inconsistencies when pulling stats from external sources.
          </p>
<br></br>
          <h3>What I Learned</h3>
          <p>
            This project taught me how to integrate real-time AI tools into web applications and manage state across asynchronous operations. It also sharpened my frontend design skills and gave me experience working on a team with shared responsibilities and version control.
          </p>
        </div>
      </section>
    </>
  );
};

export default DribbleDataDetails;
