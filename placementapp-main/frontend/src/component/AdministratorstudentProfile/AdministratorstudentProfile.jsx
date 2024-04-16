import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Button } from 'react-bootstrap';
import "./AdministratorstudentProfile.css";

const AdministratorStudentProfile = ({ user, onApprove, onReject }) => {
  return (
    <div className="user-box">
      <div className="user-info">
        <img src={user.photo} alt={user.name} className="user-photo" />
        <div className="user-details">
          <h2><Link to="/adminstuduProfileview">{user.name}</Link></h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="user-actions">
        <button onClick={onApprove} className="approve-button">Approve</button>
        <button onClick={onReject} className="reject-button">Reject</button>
      </div>
    </div>
  );
};

const AdministratorStudentProfiles = () => {
  // Dummy data for multiple users
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const users = [
    {
      name: "Gopika PS",
      email: "Gopika@example.com",
      photo: "https://via.placeholder.com/150", // URL of user photo
    },
    // John Doe removed
  ];

  // Dummy functions for handling approve and reject
  const handleApprove = () => {
    // Logic for approving user
  };

  const handleReject = () => {
    // Logic for rejecting user
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="main-component">
      <div className="search-container d-flex justify-content-center align-items-center">
        <FormControl
          type="text"
          placeholder="Search by name..."
          className="mr-2 search-input" // Add a custom class
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="primary" className="ml-2">Search</Button>
      </div>
      {filteredUsers.length > 0 && (
        <div className="user-box-container">
          {/* Map over the filtered users array and render AdministratorStudentProfile for each user */}
          {filteredUsers.map((user, index) => (
            <AdministratorStudentProfile
              key={index}
              user={user}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdministratorStudentProfiles;




