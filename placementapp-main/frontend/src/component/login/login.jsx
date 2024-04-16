import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import{Link} from 'react-router-dom';

function Login() {
  return (
    <div className="box-container">
      <h1 className="heading">Login</h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
<Link to='/StudentDetails'>
        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button></Link>
        </Form>
        <p className="forgot-password-link">
          <a href="/forgotpassword">Forgot Password?</a>
        </p>
        
      <p className="register-link">Don't have an account? <a href="/studentsregistration">Register</a></p>
    </div>
  );
}

export default Login;

