import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for making HTTP requests

function DepartmentDetails() {
  const [formData, setFormData] = useState({
    sem: "",
    year: "",
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
      <h1 className="heading">Department Details</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSem">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter semester"
            name="sem"
            value={formData.sem}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year"
            name="year"
            value={formData.year}
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

export default DepartmentDetails;
