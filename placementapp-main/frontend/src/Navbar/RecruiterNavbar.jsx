import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./RecruiterNavbar.css";
function RecruiterNavbar() {
  return (
    <Navbar expand="lg" className="bg-transparent navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/recruiterHome" className="text-center">
              Home
            </Nav.Link>
            <Nav.Link href="/recruiterProfile" className="text-center">
              Profile
            </Nav.Link>
            <Nav.Link href="/postJob" className="text-center">
              Post Job
            </Nav.Link>
            <Nav.Link href="/viewJobs" className="text-center">
              View Jobs
            </Nav.Link>
            <Nav.Link href="/recruiterHome" className="text-center">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default RecruiterNavbar;
