import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Studentsregistration.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Passwords match, you can proceed with registration
      console.log("Passwords match!");
      // Here you can add your registration logic
    } else {
      // Passwords do not match
      console.log("Passwords do not match!");
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Student Registration</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {!passwordsMatch && (
            <Form.Text className="text-danger">
              Passwords do not match.
            </Form.Text>
          )}
        </Form.Group>

        <Button className="Submit-button" variant="primary" style={{ color: 'white' }}>
        <a href="/home" style={{ color: 'white', textDecoration: 'none' }}>Register</a>
      </Button>
      </Form>
      <p className="login-link">
        Already have an account? <a href="/">Login</a>
      </p>
      <p>-------------------------------------------------------</p>
      <p className="recruiterRegister-link">
        if you are not a student <a href="/recuiteregistration">Recruiter</a>
      </p>
    </div>
  );
}

export default Registration;
