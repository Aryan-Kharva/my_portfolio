import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import '../assets/css/navbar.css';

const MyNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky-wrapper"
    >
      <Navbar variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/', { replace: true })}>Home</Nav.Link>
              <Nav.Link onClick={() => handleScroll('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleScroll('contact-me')}>Contact Me</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default MyNavbar;
