import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/css/navbar.css';

const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#000000ea' }} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
