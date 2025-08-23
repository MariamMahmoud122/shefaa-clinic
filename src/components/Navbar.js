import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.PNG"; // استدعاء اللوجو

export default function ClinicNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center">
          <img
            src={logo}
            alt="Clinic Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <span className="text-danger fw-bold fs-4">SHEFAA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#doctors">Doctors</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#booking">Book Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
