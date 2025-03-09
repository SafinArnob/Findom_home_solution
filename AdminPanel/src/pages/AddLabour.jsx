import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../styles/AddLabour.css";

const AddLabour = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    labourType: "",
    age: "",
    experience: "",
    workingExperience: "",
    labourPicture: null,
    location: "",
  });

  // State for file input label
  const [fileName, setFileName] = useState("No file chosen");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "labourPicture") {
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
    document.querySelector(".card").classList.add("animate__fadeOutUp");
    setTimeout(() => {
      navigate("/maintenance");
    }, 500);
  };

  // Handle form cancellation
  const handleCancel = () => {
    setFormData({
      labourType: "",
      age: "",
      experience: "",
      workingExperience: "",
      labourPicture: null,
      location: "",
    });

    navigate("/maintenance");
  };

  return (
    <div className="labour-page">
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
              <h2 className="card-title text-center">ADD LABOUR DETAILS</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="labourType" className="form-label">
                        <span className="icon">👷</span> Labour Type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="labourType"
                        name="labourType"
                        placeholder="Enter labour type (e.g., Plumber, Electrician)"
                        value={formData.labourType}
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
                      <label htmlFor="age" className="form-label">
                        <span className="icon">🎂</span> Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="experience" className="form-label">
                        <span className="icon">📅</span> Experience (Years)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="experience"
                        name="experience"
                        placeholder="Enter experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="workingExperience" className="form-label">
                        <span className="icon">🛠️</span> Working Experience
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="workingExperience"
                        name="workingExperience"
                        placeholder="Enter working experience"
                        value={formData.workingExperience}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="labourPicture" className="form-label">
                    <span className="icon">🖼️</span> Labour Picture
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      className="d-none"
                      id="labourPicture"
                      name="labourPicture"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                    />
                    <div className="file-upload-info">
                      <button
                        type="button"
                        className="btn btn-browse"
                        onClick={() => document.getElementById("labourPicture").click()}
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
                  <button type="submit" className="btn btn-submit">
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

export default AddLabour;