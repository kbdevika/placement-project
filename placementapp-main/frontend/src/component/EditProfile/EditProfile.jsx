import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'; // Include MDBIcon
import './EditProfile.css';

function EditProfile() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="11" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBTypography tag="h2" className="heading" style={{ color: 'blue' }}>Edit Profile</MDBTypography>
            <MDBCardImage
  src="https://example.com/your-image.jpg" // Change the image URL
  alt="Your Alternative Text" // Change the alternative text
  className="my-5" // You can adjust or remove this class
  style={{ width: "100%", maxHeight: "200px" }} // Adjust styles as needed
  fluid
/>

              <MDBRow className="pt-1">
                  <MDBCol size="11" className="mb-3">
                    <MDBTypography tag="h5">Name</MDBTypography>
                    <input type="text" className="form-control" placeholder="Enter your name" required />
                  </MDBCol>
                  </MDBRow>
                  <MDBRow className="pt-1">
                  <MDBCol size="11" className="mb-3">
                    <MDBTypography tag="p">Branch</MDBTypography>
                    <input type="text" className="form-control" placeholder="Branch" required />
                  </MDBCol>
                  </MDBRow>
              <MDBIcon far icon="edit" className="mb-5" /> {/* Corrected MDBIcon usage */}
            </MDBCard>
            <MDBCardBody className="p-4">

              <hr className="mt-0 mb-4" />
              <MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Information</MDBTypography>

              <hr className="mt-0 mb-4" />
              <form>
                <MDBRow className="pt-1">
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Email</MDBTypography>
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                  </MDBCol>
                  <MDBCol size="6" className="mb-3">
                    <MDBTypography tag="h6">Phone Number</MDBTypography>
                    <input type="number" className="form-control" placeholder="Enter your number" required />
                  </MDBCol>
                </MDBRow>
                <MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Department Details</MDBTypography>

<hr className="mt-0 mb-4" />
  <MDBRow className="pt-1">
    <MDBCol size="6" className="mb-3">
      <MDBTypography tag="h6">Sem</MDBTypography>
      <input type="Number" className="form-control" placeholder=" sem" required />
    </MDBCol>
    <MDBCol size="6" className="mb-3">
      <MDBTypography tag="h6">Year</MDBTypography>
      <input type="year" className="form-control" placeholder="year" required />
    </MDBCol>
  </MDBRow>
  <MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Project Details</MDBTypography>

<hr className="mt-0 mb-4" />
  <MDBRow className="pt-1">
    <MDBCol size="6" className="mb-3">
      <MDBTypography tag="h6">Title</MDBTypography>
      <input type="text" className="form-control" placeholder=" Enter the Title" required />
    </MDBCol>
    <MDBCol size="6" className="mb-3">
      <MDBTypography tag="h6">Description</MDBTypography>
      <input type="text" className="form-control" placeholder="Briefly explain" required />
    </MDBCol>
    <MDBCol size="6" className="mb-3">
      <MDBTypography tag="h6">End date</MDBTypography>
      <input type="date" className="form-control" placeholder="start date" required />
    </MDBCol>
    <MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">End date</MDBTypography>
<input type="date" className="form-control" placeholder="end date" required />
</MDBCol>
  </MDBRow>
  <MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Internship Details</MDBTypography>

<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Company </MDBTypography>
<input type="text" className="form-control" placeholder=" Enter company name" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Description</MDBTypography>
<input type="text" className="form-control" placeholder="Briefly explain" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">position</MDBTypography>
<input type="text" className="form-control" placeholder="Enter position" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Start date</MDBTypography>
<input type="date" className="form-control" placeholder="start date" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">End date</MDBTypography>
<input type="date" className="form-control" placeholder=" end date" required />
</MDBCol>
</MDBRow>
<MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Work Experiance</MDBTypography>

<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Company </MDBTypography>
<input type="text" className="form-control" placeholder=" Enter company name" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Description</MDBTypography>
<input type="text" className="form-control" placeholder="Briefly explain" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">position</MDBTypography>
<input type="text" className="form-control" placeholder="Enter position" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Start date</MDBTypography>
<input type="date" className="form-control" placeholder="start date" required />
</MDBCol>
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">End date</MDBTypography>
<input type="date" className="form-control" placeholder=" end date" required />
</MDBCol>
</MDBRow>
<MDBTypography tag="h2" className="heading" style={{ color: 'black' }}>Skills</MDBTypography>

<hr className="mt-0 mb-4" />
<MDBRow className="pt-1">
<MDBCol size="6" className="mb-3">
<MDBTypography tag="h6">Skill </MDBTypography>
<input type="text" className="form-control" placeholder=" Enter skills" required />
</MDBCol>
</MDBRow>
  <MDBRow className="pt-1">
    <MDBCol size="12">
      <button className="submit-button" type="submit">Edit</button>
    </MDBCol>
  </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default EditProfile;
