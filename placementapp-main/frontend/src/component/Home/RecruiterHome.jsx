import React from "react";
import { Container } from "react-bootstrap";
import RecruiterNavbar from "../../Navbar/RecruiterNavbar";
import "./RecruiterHome.css";
function RecruiterHome() {
  return (
    <>
      <div className="home">
        <RecruiterNavbar />
        <Container fluid className="text-center text-white py-4 container">
          <h1>OpportunityLink: Student-Recruiter connect</h1>
        </Container>
      </div>
    </>
  );
}

export default RecruiterHome;