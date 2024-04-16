import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for making HTTP requests
import "./postJob.css";

function PostJob() {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    jobDetails: "",
    industry: "",
    vacancy: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("YOUR_API_ENDPOINT_HERE", formData);
      console.log("Job Posted Successfully:", res.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error("Error posting job:", error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Job Details</h1>
      <Form className="Jobs" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasictTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDetails">
          <Form.Label>Job Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter job description"
            name="jobDetails"
            value={formData.jobDetails}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Industry</Form.Label>
          <Form.Control
            type="text"
            placeholder="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCriteria">
          <Form.Label>Vacancy</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number of vacancies"
            name="vacancy"
            value={formData.vacancy}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCriteria">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Last day of applying"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}

export default PostJob;
