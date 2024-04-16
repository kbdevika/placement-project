import React from "react";
import { Form, Button } from "react-bootstrap";
function RegisterJob() {
  return (
    <div className="box-container">
    <h1 className="heading">Registration</h1>
    <Form className="registration-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter department" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="submit-button" variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p className="login-link">
      Already have an account? <a href="/login">Login</a>
    </p>
  </div>
  )
}

export default RegisterJob