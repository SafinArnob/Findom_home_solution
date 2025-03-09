import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaUpload, FaTrash } from "react-icons/fa";
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
    location: "",
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
    images: [], // Changed to array for multiple images
  });

  const [previewImages, setPreviewImages] = useState([]); // Array of preview images
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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

  // Handle multiple image files input
  const handleImagesUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      // Update formData with new files
      setFormData({
        ...formData,
        images: [...formData.images, ...files], // Append new files to existing ones
      });

      // Create previews for new files
      const newPreviews = files.map((file) => ({
        url: URL.createObjectURL(file),
        file: file,
      }));

      setPreviewImages([...previewImages, ...newPreviews]);
    }
  };

  // Remove a specific image
  const handleRemoveImage = (index) => {
    // Create new arrays without the removed image
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);

    const updatedPreviews = [...previewImages];

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedPreviews[index].url);
    updatedPreviews.splice(index, 1);

    setFormData({
      ...formData,
      images: updatedImages,
    });
    setPreviewImages(updatedPreviews);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate at least one image is uploaded
    if (formData.images.length === 0) {
      setError("Please upload at least one image");
      setIsSubmitting(false);
      return;
    }

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
      data.append("location", formData.location);
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

      // Append multiple images with the same field name
      formData.images.forEach((image) => {
        data.append("images", image); // Note: field name changed to "images" (plural)
      });

      // Send data to backend API
      const response = await axios.post(
        `http://localhost:8080/api/properties/upload`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Include the JWT in headers
          },
        }
      );

      console.log("Property uploaded successfully:", response.data);
      alert("Property listing submitted successfully!");
      navigate("/profile"); // Redirect to profile or another page
    } catch (error) {
      console.error("Error uploading property:", error);
      setError(
        error.response?.data?.message ||
          "Failed to upload property. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render multiple image previews
  const renderImagePreviews = () => {
    if (previewImages.length === 0) return null;

    return (
      <Row className="mb-3">
        {previewImages.map((preview, index) => (
          <Col md={4} key={index} className="mb-2">
            <Card className="image-preview">
              <Card.Img
                variant="top"
                src={preview.url}
                alt={`Property image preview ${index + 1}`}
                className="preview-image"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body className="p-2 d-flex justify-content-between align-items-center">
                <small className="text-muted">Image {index + 1}</small>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FaTrash /> Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
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

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

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
                          placeholder="e.g. Modern Family Home"
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
                          <option value="">Select Property Type</option>
                          <option value="family">Family</option>
                          <option value="bachelor">Bachelors</option>
                          <option value="sublet">Sublet</option>
                          <option value="hostel">Hostel</option>
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
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Neighborhood/District"
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
                          placeholder="e.g. New York"
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
                          placeholder="e.g. 10001"
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
                        <Form.Label>
                          Upload Images* (Up to 10 images)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="images"
                          onChange={handleImagesUpload}
                          accept="image/*"
                          multiple // Enable multiple file selection
                        />
                        <small className="text-muted">
                          Acceptable formats: .jpg, .jpeg, .png, .webp (Max
                          size: 5MB per image)
                        </small>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Image Previews */}
                  {renderImagePreviews()}

                  <div className="mb-3">
                    <small className="text-primary">
                      <strong>
                        Number of images: {previewImages.length}/10
                      </strong>
                    </small>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-3"
                    disabled={isSubmitting || previewImages.length === 0}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Listing"}
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
