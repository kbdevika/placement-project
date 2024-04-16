import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function InternshipDetails() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("end api user here", {
        method: "POST", // or "GET", "PUT", etc.
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers required by your API
        },
        body: JSON.stringify({
          companyName,
          position,
          description,
          startDate,
          endDate,
        }),
      });
      if (response.ok) {
        // Handle successful response from the API
        console.log("Data submitted successfully");
        // Reset form fields if needed
        setCompanyName("");
        setPosition("");
        setDescription("");
        setStartDate("");
        setEndDate("");
      } else {
        // Handle error response from the API
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Internship Details</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tile"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tile"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartdate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="Date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEnddate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="Date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InternshipDetails;
