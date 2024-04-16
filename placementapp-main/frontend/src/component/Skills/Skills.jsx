import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for making HTTP requests

function Skills() {
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("YOUR_API_ENDPOINT_HERE", { skill });
      console.log("Skill Submitted Successfully:", res.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error("Error submitting skill:", error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Skills</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter skills"
            value={skill}
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

export default Skills;
