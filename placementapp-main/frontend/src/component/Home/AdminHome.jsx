import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../Navbar/AdminNavbar";
import "./AdminHome.css";
function AdminHome() {
  return (
    <>
      <div className="home">
        <AdminNavbar />
        <Container fluid className="text-center text-white py-4 container">
          <h1>OpportunityLink: Student-Recruiter connect</h1>
        </Container>
      </div>
    </>
  );
}

export default AdminHome;