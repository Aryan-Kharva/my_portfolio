import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/project-detail.css';
import threadsImage from '../assets/images/project2.png';
import brainstorm1 from '../assets/images/brainstorm1.png';
import parents from '../assets/images/parents.png';
import flyer1 from '../assets/images/flyer1.png';
import flyer2 from '../assets/images/flyer2.png';
import flyer3 from '../assets/images/flyer3.png';
import flyer4 from '../assets/images/flyer4.png';

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
          <br></br>
          <h3>Design Process</h3>
          <p>
            I came up with the name “Bollywood Threads” to reflect both our cultural roots and the colorful, expressive nature of South Asian fashion. I designed the logo entirely in Procreate using just my iPad and Apple Pencil, experimenting with different typography and graphical flourishes until I found something that felt bold and memorable.
          </p>
          <p>
            Throughout the project, I stayed in close communication with my mom to make sure every section reflected her voice and her clientele. That collaboration helped me understand the real-world balance between form and function — and confirmed my love for design work alongside coding.
          </p>
          <p>
            This project helped ground my interest in UX/UI and graphic design. I realized I enjoy designing interfaces and branding just as much as building the technical side. It was the first time I saw how both sides of my brain could work together to bring something to life.
          </p>

          <div className="project-inline-image">
  <div className="project-inline-wrapper">
    <img
      src={brainstorm1}
      alt="Brainstorming sketches"
      className="project-sub-image"
    />
    <p className="project-image-caption">Initial brainstorming sketches for logo, layout, and brand elements</p>
  </div>
</div>

        <br></br>
          <h3>Marketing and Flyers</h3>
          <p>
            After the site build, I continued helping with marketing by designing flyers and graphics for exhibitions and sales events. These were all created in Canva or Procreate, using elements consistent with our brand. I’ve included a few of those designs below.
          </p>
          <div className="flyer-collage-structured">
  {/* Static parents image */}
  <img src={parents} alt="My parents" className="flyer-item parents" />

  <motion.img
    src={flyer1}
    alt="Flyer 1"
    className="flyer-item flyer1"
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
  />

  <motion.img
    src={flyer3}
    alt="Flyer 3"
    className="flyer-item flyer3"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true, amount: 0.3 }}
  />

  <motion.img
    src={flyer4}
    alt="Flyer 4"
    className="flyer-item flyer4"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
  />

  <motion.img
    src={flyer2}
    alt="Flyer 2"
    className="flyer-item flyer2"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  />
</div>
<br></br><br></br>
<h3>Key Features</h3>
<ul className="project-bullets">
  <li>Custom-built responsive website using HTML, CSS, and modular structure</li>
  <li>Designed brand identity, logo, and visual language using Procreate</li>
  <li>Created wireframes and layout plans in Figma to map out site flow</li>
  <li>Developed pages for product listings, appointment booking, and events</li>
  <li>Implemented an interactive flyer showcase section using a CSS grid layout</li>
  <li>Ongoing collaboration with the business owner to align updates with live events</li>
</ul>

<div className="project-inline-image">
<img
  src={require('../assets/images/gallery.png')}
  alt="Gallery page screenshot"
  className="project-sub-image project-sub-image-large"
/>


<p className="project-image-caption">Gallery page — displays past exhibitions, pop-up events, and product highlights</p>
</div>

<h3>Challenges</h3>
<p>
  Since this was a real client-facing project, I had to make sure the site reflected both the business’s vision and customer expectations. One challenge was keeping everything aligned visually — especially when balancing image-based content like flyers with mobile responsiveness. I also had to constantly adjust my designs based on feedback and evolving ideas.
</p>
<br></br>
<h3>What I Learned</h3>
<p>
  This project helped me build confidence in working with a real stakeholder — my mom — and taught me how to communicate ideas visually and iteratively. I learned how to translate brand identity into a consistent digital experience, and it sparked a deeper interest in UX/UI design and client-focused development.
</p>


<br></br>

          <h3>Next Steps</h3>
          <p>
            My next goal is to deploy this site live after ironing out a few kinks and refining the layout for mobile responsiveness. I’m excited to see it evolve into a fully operational platform that supports her business long-term.
          </p>
        </div>
      </section>
    </>
  );
};

export default BollywoodThreadsDetails;
