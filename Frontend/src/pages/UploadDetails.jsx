import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import "../styles/UploadDetails.css";
import familyImage from "../assets/images/family.png"; // Import the image
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer
import axios from "axios"; // For making API requests
import { useNavigate } from "react-router-dom"; // For redirection

const UploadDetails = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    Location: "",
    city: "",
    zipCode: "",
    propertyType: "",
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
    images: null,
  });

  const navigate = useNavigate();

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle change for checkboxes
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

  // Handle image file input
  const handleImageUpload = (e) => {
    const files = e.target.files[0];
    console.log(files);
    setFormData({
      ...formData,
      images: files, // Store the selected files
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("xx");

    const token = localStorage.getItem("token"); // Get the JWT token
    if (!token) {
      alert("You must be logged in to upload a property.");
      navigate("/login"); // Redirect to login page
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("address", formData.address);
      data.append("Location", formData.Location);
      data.append("city", formData.city);
      data.append("zipCode", formData.zipCode);
      data.append("propertyType", formData.propertyType);
      data.append("price", formData.price);
      data.append("rooms", formData.rooms);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);
      data.append("size", formData.size);
      data.append("yearBuilt", formData.yearBuilt);
      data.append("description", formData.description);
      data.append("features", JSON.stringify(formData.features)); // Stringify features
      data.append("images", formData.images);

      // // Append images
      // formData.images.forEach((image) => {
      //   data.append("images", image);
      // });

      // Send data to backend API
      const response = await axios.post(`http://localhost:8080/api/properties/upload`, data, 
        {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Include the JWT in headers
        },
      });

      console.log("Property uploaded successfully:", response.data);
    //  toast.success();
      alert("Property listing submitted successfully!");
      navigate("/profile"); // Redirect to profile or another page
    } catch (error) {
      console.error("Error uploading property:", error);
      alert("Failed to upload property. Please try again.");
    }
  };

  // Render image previews
  const renderImagePreviews = () => {
    let image = formData.images;
    return (
      <Card key={0} className="mb-2 image-preview">
        <Card.Img
          variant="top"
          src={URL.createObjectURL(image)}
          alt={`Property image`}
          className="preview-image"
        />
        <Card.Body className="p-2">
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              const newImages = [...formData.images];
              newImages.splice(1, 1);
              setFormData({ ...formData, images: newImages });
            }}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Navbar />
      <Container className="upload-details-container">
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-lg">
              <Card.Header className="card-header">
                <h2>Add New Property Listing</h2>
              </Card.Header>
              <Card.Body>
                <div
                  style={{
                    backgroundImage: `url(${familyImage})`,
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
                          placeholder="e.g. Dhaka"
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
                        <Form.Label>Zip Code*</Form.Label>
                        <Form.Control
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="e.g. 1216"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Description */}
                  <h4 className="section-title">Description</h4>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Property Description*</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Describe the property"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Features */}
                  <h4 className="section-title">Features</h4>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="garage"
                        label="Garage"
                        checked={formData.features.garage}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="tvCable"
                        label="TV Cable"
                        checked={formData.features.tvCable}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="wifi"
                        label="Wi-Fi"
                        checked={formData.features.wifi}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="windowCoverings"
                        label="Window Coverings"
                        checked={formData.features.windowCoverings}
                        onChange={handleFeatureChange}
                      />
                    </Col>
                  </Row>

                  {/* Images Upload */}
                  <h4 className="section-title">Images</h4>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Upload Images*</Form.Label>
                        <Form.Control
                          type="file"
                          multiple
                          onChange={handleImageUpload}
                          required
                          accept="image/*" //restrict only images
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Image Previews */}
                  {formData.images && renderImagePreviews()}

                  <Button type="submit" variant="primary" className="mt-3">
                    Submit Listing
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default UploadDetails;