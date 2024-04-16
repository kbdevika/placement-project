import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./AdminNavbar.css";
function AdminNavbar() {
  return (
    <Navbar expand="lg" className="bg-transparent navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/adminHome" className="text-center">
              Home
            </Nav.Link>
            <Nav.Link href="/administratorstudentProfile" className="text-center">
              Student
            </Nav.Link>
            <Nav.Link href="/administratorJobdetails" className="text-center">
              Recruiter
            </Nav.Link>
            <Nav.Link href="/adminHome" className="text-center">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AdminNavbar;
