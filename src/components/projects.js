import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';

const Projects = () => {
  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i === 0 ? -100 : 100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="text-center mb-5">
        <h1 className="section-title">portfolio.</h1>
        <p className="section-subtitle">
          Check out some of my latest work. These projects showcase my skills in frontend development, web architecture, and UX/UI design.
        </p>
      </div>

      <div className="projects-grid">
        {[{
          title: 'Spin City Market',
          tag: 'Vinyl Marketplace · Full Stack',
          desc: 'Spin City Market is a full-stack web app where users can browse, list, and manage vinyl records. Includes image uploads, soft deletion, search functionality, and a clean UI. Built using Node.js, Express, MongoDB, EJS, and CSS.',
          link: '/projects/spin-city-market',
          img: project1Img,
          external: false
        }, {
          title: 'Bollywood Threads',
          tag: 'Business Website · Frontend',
          desc: 'Bollywood Threads is a custom-designed informational and appointment booking website built for a small Indian fashion business. Features interactive photo galleries using Slick Carousel, a booking form, and an owner bio section. Built with HTML, CSS, JavaScript, and custom components.',
          link: 'https://github.com/Aryan-Kharva/Bollywood-Threads-Website',
          img: project2Img,
          external: true
        }].map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={() => cardVariants.hidden(i)}
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <img src={project.img} alt={project.title} className="project-image fixed-height" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tag">{project.tag}</p>
              <p className="project-desc">{project.desc}</p>
              {project.external ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  <span className="arrow-text">View Project</span>
                  <span className="arrow-icon">→</span>
                </a>
              ) : (
                <a href={project.link} className="arrow-link">
                  <span className="arrow-text">View Project</span>
                  <span className="arrow-icon">→</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
