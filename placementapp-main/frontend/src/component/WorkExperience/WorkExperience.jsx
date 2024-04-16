import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for making HTTP requests

function WorkExperience() {
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("YOUR_API_ENDPOINT_HERE", formData);
      console.log("Data Submitted Successfully:", res.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Work Experience Details</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
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

        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter start date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter end date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default WorkExperience;
