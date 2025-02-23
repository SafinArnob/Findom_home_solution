import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("userLogin"); // Tracks current tab
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ name: "", email: "", password: "" }); // Reset form fields when switching tabs
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation for password length
    if (formData.password.length < 4) {
      toast.error("Password can't be less than 4 characters", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return; // Stop further execution
    }

    try {
      if (activeTab === "signUp") {
        const response = await axios.post("http://localhost:8080/auth/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        console.log("Signup Success:", response.data);
        toast.success("Signup successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({ name: response.data.name, email: response.data.email })
        );

        // Redirect to profile page
        navigate("/profile");


      } else if (activeTab === "userLogin") {
        const response = await axios.post("http://localhost:8080/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        console.log("Login Success:", response.data);
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({ name: response.data.name, email: response.data.email })
        );

        // Store token for authentication
        localStorage.setItem("token", response.data.jwtToken);

        // Redirect to profile page
        navigate("/profile");
      }

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex vh-100 position-relative"
        style={{ backgroundColor: "#FFF7E6", overflow: "hidden" }}
      >
        <div
          className="position-absolute"
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#F9963F",
            borderTopRightRadius: activeTab === "signUp" ? "0" : "100% 50%",
            borderBottomRightRadius: activeTab === "signUp" ? "0" : "100% 50%",
            borderTopLeftRadius: activeTab === "signUp" ? "100% 50%" : "0",
            borderBottomLeftRadius: activeTab === "signUp" ? "100% 50%" : "0",
            left: activeTab === "signUp" ? "50%" : "0",
            right: activeTab === "signUp" ? "0" : "50%",
            zIndex: 1,
            transition: "0.5s ease-in-out",
          }}
        ></div>

        <div
          className="mt-5 d-flex flex-column align-items-center flex-grow-1"
          style={{ zIndex: 2, width: "100%" }}
        >
          <h1 className="text-dark">
            {activeTab === "signUp" ? "Find Faster, Live Better" : "Welcome Back!"}
          </h1>
          <p>
            {activeTab === "signUp"
              ? "Create an account and get started"
              : "Sign in to continue your journey"}
          </p>

          <div
            className="card shadow p-5"
            style={{
              width: "400px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#FFE8CC",
            }}
          >
            <h2
              className="text-center mb-4"
              style={{ color: "#FF7A00", fontWeight: "bold" }}
            >
              {activeTab === "signUp" ? "Sign Up" : "Sign In"}
            </h2>
            <form onSubmit={handleSubmit}>
              {activeTab === "signUp" && (
                <>
                  <div className="mb-4">
                    <label className="form-label"><strong>Full Name:</strong></label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="User Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="form-label"><strong>Email:</strong></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label"><strong>Password:</strong></label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn w-100 mb-4"
                style={{
                  backgroundColor: "#FF7A00",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                {activeTab === "signUp" ? "Sign Up" : "Login"}
              </button>

              {activeTab === "userLogin" && (
                <div className="text-center">
                  <span className="text-muted">Don't Have an Account? </span>
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleTabChange("signUp")}
                    style={{
                      color: "#FF7A00",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {activeTab === "signUp" && (
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleTabChange("userLogin")}
                    style={{
                      color: "#FF7A00",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Login Now
                  </button>
                </div>
              )}
            </form>

            {activeTab === "userLogin" && (
              <div
                className="d-flex justify-content-center mt-3 mb-4"
                style={{ gap: "15px" }}
              >
                <FaGoogle size={30} style={{ color: "#DB4437", cursor: "pointer" }} />
                <FaFacebook size={30} style={{ color: "#4267B2", cursor: "pointer" }} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      {/* Add ToastContainer here */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LoginSignup;