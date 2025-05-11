import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/projects.css';
import project1Img from '../assets/images/project1.png';
import project2Img from '../assets/images/project2.png';
import project3Img from '../assets/images/project3.png';
import project4Img from '../assets/images/project4.png';

const Projects = () => {
  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100
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

  const topRow = [
    {
      title: 'Spin City Market',
      tag: 'Vinyl Marketplace · Full Stack',
      desc: 'Spin City Market is a full-stack web app where users can browse, list, and manage vinyl records. Includes image uploads, soft deletion, search functionality, and a clean UI. Built using Node.js, Express, MongoDB, EJS, and CSS.',
      link: '/projects/spin-city-market',
      img: project1Img,
      external: false
    },
    {
      title: 'Bollywood Threads',
      tag: 'Business Website · Frontend',
      desc: 'A custom-built website for an Indian fashion brand, featuring interactive galleries, a booking form, and a clean, responsive layout. Designed and developed to highlight South Asian attire with elegance.',
      link: '/projects/bollywood-threads',
      img: project2Img,
      external: false
    }    
  ];

  const bottomRow = [
    {
      title: 'Potato Properties',
      tag: 'Apartment Management · Full Stack',
      desc: 'Potato Properties is a collaborative apartment management platform. Developed full-stack functionality for property listings, tenant dashboards, user authentication, and maintenance request tracking. Technologies include Node.js, Express, EJS, and MongoDB. Collaborated with a six-person team using GitHub and Trello.',
      link: '/projects/potato-properties',
      img: project3Img,
      external: false
    },
    {
      title: 'DribbleData',
      tag: 'NBA Analytics · Full Stack',
      desc: 'Interactive analytics app for exploring NBA player performance and comparisons. Built with Flask and Chart.js, featuring autocomplete search, player comparison, and OpenAI-powered Q&A.',
      link: '/projects/dribbledata',
      img: project4Img,
      external: false
    }    
    
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="text-center mb-5">
        <h1 className="section-title">portfolio.</h1>
        <p className="section-subtitle">
          Check out some of my latest work. These projects showcase my skills in frontend development, web architecture, and UX/UI design.
        </p>
      </div>

      {/* Top row with two cards */}
      <div className="projects-grid">
        {topRow.map((project, i) => (
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
              <a
                href={project.link}
                target={project.external ? '_blank' : '_self'}
                rel={project.external ? 'noopener noreferrer' : ''}
                className="arrow-link"
              >
                <span className="arrow-text">View Project</span>
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row with two cards */}
      <div className="projects-grid">
        {bottomRow.map((project, i) => (
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
              <a
                href={project.link}
                target={project.external ? '_blank' : '_self'}
                rel={project.external ? 'noopener noreferrer' : ''}
                className="arrow-link"
              >
                <span className="arrow-text">View Project</span>
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
