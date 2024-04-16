import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    // Here you would send a request to update the password
    // For demonstration purposes, let's just display a success message
    setSuccess(true);
  };

  return (
    <div className="box-container">
      <h1 className="heading">Reset Password</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Password reset successful!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter new password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Confirm new password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button className="submit-button" variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </div>
  );
}

export default ResetPassword;

