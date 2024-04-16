import React from "react";
import { Link } from "react-router-dom"; 
import { Button } from "react-bootstrap";
import "./RecruitDashboard.css";

const RecruitDashboard = () => {
  return (
    <div className="Recruit">
      <h1>OpportunityLink: Recruiter Dashboard</h1>
      <div className="app-container">
        <div className="button-container">
        <Link to="/postJob">
            <Button className="job-button" variant="primary">Post Job</Button>
          </Link>
          <Link to="/viewJobs">
            <Button className="job-button" variant="primary">View Jobs</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruitDashboard;
