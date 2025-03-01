import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import "../styles/UploadDetails.css";
import familyImage from "../assets/images/family.png"; // Import the image
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const UploadDetails = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    Location: "",
    city: "",
    country: "Bangladesh",
    zipCode: "",
    propertyType: "House",
    listingType: "For Rent",
    price: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    yearBuilt: "",
    description: "",
    features: {
      garage: false,
      tvCable: false,
      wifi: false,
      windowCoverings: false,
    },
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFeatureChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      features: {
        ...formData.features,
        [name]: checked,
      },
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Property listing submitted successfully!");
  };

  const renderImagePreviews = () => {
    return formData.images.map((image, index) => (
      <Card key={index} className="mb-2 image-preview">
        <Card.Img
          variant="top"
          src={URL.createObjectURL(image)}
          alt={`Property image ${index + 1}`}
          className="preview-image"
        />
        <Card.Body className="p-2">
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              const newImages = [...formData.images];
              newImages.splice(index, 1);
              setFormData({ ...formData, images: newImages });
            }}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <>
      {/* Add Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container className="upload-details-container">
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-lg">
              <Card.Header className="card-header">
                <h2>Add New Property Listing</h2>
              </Card.Header>
              <Card.Body>
                {/* Static Image Section */}
                <div
                  style={{
                    backgroundImage: `url(${familyImage})`, // Use the imported image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                  }}
                ></div>

                <Form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <h4 className="section-title">Basic Information</h4>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Listing Title*</Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="e.g. Rampura, Dhaka"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Price ($)*</Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="e.g. 12500"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Property Details */}
                  <h4 className="section-title">Property Details</h4>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Property Type*</Form.Label>
                        <Form.Select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                        >
                          <option value="House">House</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Year Built</Form.Label>
                        <Form.Control
                          type="number"
                          name="yearBuilt"
                          value={formData.yearBuilt}
                          onChange={handleChange}
                          placeholder="e.g. 2020"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Total Rooms*</Form.Label>
                        <Form.Control
                          type="number"
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                          placeholder="e.g. 4"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Bedrooms*</Form.Label>
                        <Form.Control
                          type="number"
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          placeholder="e.g. 3"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Bathrooms*</Form.Label>
                        <Form.Control
                          type="number"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          placeholder="e.g. 2"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Property Size (SqFt)*</Form.Label>
                        <Form.Control
                          type="number"
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          placeholder="e.g. 900"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Property Address */}
                  <h4 className="section-title">Property Address</h4>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Address*</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="e.g. 39-11 61st St"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Location*</Form.Label>
                        <Form.Control
                          type="text"
                          name="Location"
                          value={formData.Location}
                          onChange={handleChange}
                          placeholder="e.g. Rampura"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>City*</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Dhaka"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Country*</Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. Bangladesh"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Property Features */}
                  <h4 className="section-title">Property Features</h4>
                  <Row>
                    <Col md={6} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id="garage"
                        label="Garage"
                        name="garage"
                        checked={formData.features.garage}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id="tvCable"
                        label="TV Cable"
                        name="tvCable"
                        checked={formData.features.tvCable}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id="wifi"
                        label="WiFi"
                        name="wifi"
                        checked={formData.features.wifi}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id="windowCoverings"
                        label="Window Coverings"
                        name="windowCoverings"
                        checked={formData.features.windowCoverings}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                  </Row>

                  {/* Property Description */}
                  <h4 className="section-title">Property Description</h4>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Description*</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your property..."
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Property Images */}
                  <h4 className="section-title">Property Images</h4>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Upload Images*</Form.Label>
                        <div className="input-group">
                          <Form.Control
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            required={formData.images.length === 0}
                          />
                          <Button variant="outline-secondary">
                            <FaUpload /> Upload
                          </Button>
                        </div>
                        <Form.Text className="text-muted">
                          Upload at least one image. You can upload multiple
                          images at once.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Image Previews */}
                  <Row className="mt-3">
                    <Col>
                      <h5>Image Previews:</h5>
                      {formData.images.length > 0 ? (
                        <div className="d-flex flex-wrap">
                          {renderImagePreviews()}
                        </div>
                      ) : (
                        <p className="text-muted">No images uploaded yet.</p>
                      )}
                    </Col>
                  </Row>

                  {/* Submit Button */}
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-between">
                      <Button variant="secondary" type="button">
                        Cancel
                      </Button>
                      <Button variant="primary" type="submit">
                        Submit Listing
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add Footer */}
      <Footer />
    </>
  );
};

export default UploadDetails;
