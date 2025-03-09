import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../styles/AddTransportation.css";

const AddTransportation = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    vehicleType: "",
    weight: "",
    capacity: "",
    size: "",
    vehiclePicture: null,
    location: "",
  });

  // State for file input label
  const [fileName, setFileName] = useState("No file chosen");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "vehiclePicture") {
      setFormData({ ...formData, [name]: files[0] });
      setFileName(files[0] ? files[0].name : "No file chosen");
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    // Add animation before navigating
    document.querySelector('.card').classList.add('animate__fadeOutUp');
    setTimeout(() => {
      navigate("/transportation");
    }, 500);
  };

  // Handle form cancellation
  const handleCancel = () => {
    setFormData({
      vehicleType: "",
      weight: "",
      capacity: "",
      size: "",
      vehiclePicture: null,
      location: "",
    });
    
    navigate("/transportation");
  };

  return (
    <div className="transportation-page">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card-container">
          <div className="card shadow-lg animate__animated animate__fadeInDown">
            <div className="card-header">
              <h2 className="card-title text-center">
                ADD TRANSPORTATION DETAILS
              </h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="vehicleType" className="form-label">
                        <span className="icon">🚚</span> Vehicle Type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="vehicleType"
                        name="vehicleType"
                        placeholder="Enter vehicle type"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="location" className="form-label">
                        <span className="icon">📍</span> Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder="Enter current location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="weight" className="form-label">
                        <span className="icon">⚖️</span> Weight (kg)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="weight"
                        name="weight"
                        placeholder="Enter weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="capacity" className="form-label">
                        <span className="icon">👥</span> Capacity
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="capacity"
                        name="capacity"
                        placeholder="Enter capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="size" className="form-label">
                        <span className="icon">📏</span> Size (m³)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="size"
                        name="size"
                        placeholder="Enter size"
                        value={formData.size}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="vehiclePicture" className="form-label">
                    <span className="icon">🖼️</span> Vehicle Picture
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      className="d-none"
                      id="vehiclePicture"
                      name="vehiclePicture"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                    />
                    <div className="file-upload-info">
                      <button
                        type="button"
                        className="btn btn-browse"
                        onClick={() => document.getElementById('vehiclePicture').click()}
                      >
                        Browse
                      </button>
                      <span className="file-name">{fileName}</span>
                    </div>
                    <small className="form-text text-muted mt-1">
                      Choose a file...
                    </small>
                  </div>
                </div>

                <div className="button-group">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={handleCancel}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="btn btn-submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransportation;