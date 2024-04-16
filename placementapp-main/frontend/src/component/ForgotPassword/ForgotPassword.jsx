import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [userEnteredOTP, setUserEnteredOTP] = useState('');
  const [error, setError] = useState(null);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const generateOTP = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", generatedOTP);
    setOTP(generatedOTP.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    console.log("Sending OTP to", email);
    generateOTP();
  };

  const handleVerifyOTP = () => {
    if (otp === userEnteredOTP) {
      setIsOTPVerified(true);
      setError(null);
    } else {
      setError("Invalid OTP. Please try again.");
      setIsOTPVerified(false);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Forgot Password</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {!isOTPVerified && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button className="submit-button" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
      {otp && !isOTPVerified && (
        <div>
          <p>Enter OTP sent to your email:</p>
          <Form.Group className="mb-3" controlId="formBasicOTP">
            <Form.Control 
              type="text" 
              placeholder="Enter OTP" 
              value={userEnteredOTP} 
              onChange={(e) => setUserEnteredOTP(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button className="submit-button" variant="primary" onClick={handleVerifyOTP}>
  <a href="/resetPassword" style={{ color: 'white', textDecoration: 'none' }}>Reset Password</a>
</Button>

        </div>
      )}
      {isOTPVerified && (
        <div>
          {/* You can now display a form to reset the password */}
          <p>Password reset form goes here.</p>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;

