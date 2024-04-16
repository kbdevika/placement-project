import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Data from '../../data.json';

function JobDetails() {

  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/recommend', {
          skills: searchQuery ? [searchQuery.toLowerCase()] : ["java", "python"]
        });
        setJobs(response.data.recommended);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery]); 
  
  return (
    <div className='p-5'>
      <Row className="justify-content-center mt-3 mb-3">
        <Col xs={12} md={6}>
        <Form>
            <FormControl
              type="text"
              placeholder="Search by skill"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-primary" onClick={() => setSearchQuery('')}>Reset</Button>
          </Form>
        </Col>
      </Row>
      <h2 className='justify-content-center mt-3 mb-3'>
        Recommended Jobs according to your Skills:</h2>
      <Row className="justify-content-center">
        {Array.isArray(jobs) && jobs.map((job, index) => (
          <Col key={index} xs={12} md={6}>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{job["Job Title"]}</Card.Title>
                <Card.Text>Description: {job["Job Description"]}</Card.Text>

                <Card.Text>Company: {job["Company"]}</Card.Text>

                <Card.Text>Industry: {job.Industry}</Card.Text>

                <Card.Text>Location: {job["Location"]}</Card.Text>

                <Card.Text>Required Skills: {job["Required Skills"].join(", ")}</Card.Text>

                <Button variant="primary">Apply</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default JobDetails;
