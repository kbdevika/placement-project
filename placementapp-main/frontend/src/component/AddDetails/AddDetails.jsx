import React from "react";
import { Link } from "react-router-dom";
import "./AddDetails.css";



function AddDetails({ handleOpenModal }) {
  return (
    <div className="container">
      <div className="link-container">
        {/* Use Link component from react-router-dom */}
        <div className="link-item">
          <Link to="/information">Information</Link>
        </div>
        <div className="link-item">
          <Link to="/departmentDetails">Department Details</Link>
        </div>
        <div className="link-item">
          <Link to="/projectDetails">Project Details</Link>
        </div>
        <div className="link-item">
          <Link to="/internshipDetails">Internship Details</Link>
        </div>
        <div className="link-item">
          <Link to="/workExperience">Work Experience</Link>
        </div>
        <div className="link-item">
          <Link to="/skills">Skills</Link>
        </div>
      </div>
    </div>
  );
}

export default AddDetails;
