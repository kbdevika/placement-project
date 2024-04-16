import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for making HTTP requests
import "./RecruiterEdit.css";

function RecruiterEdit() {
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
      const res = await axios.put("YOUR_API_ENDPOINT_HERE", formData);
      console.log("Job Updated Successfully:", res.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error("Error updating job:", error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Edit Job Details</h1>
      <Form className="Jobs" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobDetails">
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

        <Form.Group className="mb-3" controlId="formBasicIndustry">
          <Form.Label>Industry</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicVacancy">
          <Form.Label>Vacancy</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number of vacancies"
            name="vacancy"
            value={formData.vacancy}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter last day of applying"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default RecruiterEdit;
