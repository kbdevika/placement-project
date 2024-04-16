import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../Navbar/Navbar";
import "./home.css";
function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <Container fluid className="text-center text-white py-4 container">
          <h1>OpportunityLink: Student-Recruiter connect</h1>
        </Container>
      </div>
    </>
  );
}

export default Home;
