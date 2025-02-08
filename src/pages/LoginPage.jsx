import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Navbar from "../components/Navbar";

import Footer from './Footer';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("userLogin"); // Tracks current tab
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signUp") {
      console.log("Sign Up Data:", formData);
    } else if (activeTab === "userLogin") {
      console.log("User Login Data:", { phone: formData.phone, password: formData.password });
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Login/Signup Section */}
      <div className="d-flex vh-100 position-relative" style={{ backgroundColor: '#FFF7E6', overflow: 'hidden' }}>

        {/* Curved Shade Section for Aesthetics */}
        <div className="position-absolute" style={{
          width: '50%', height: '100%', backgroundColor: '#F9963F',
          borderTopRightRadius: activeTab === "signUp" ? '0' : '100% 50%',
          borderBottomRightRadius: activeTab === "signUp" ? '0' : '100% 50%',
          borderTopLeftRadius: activeTab === "signUp" ? '100% 50%' : '0',
          borderBottomLeftRadius: activeTab === "signUp" ? '100% 50%' : '0',
          left: activeTab === "signUp" ? '50%' : '0',
          right: activeTab === "signUp" ? '0' : '50%',
          zIndex: 1,
          transition: '0.5s ease-in-out',
        }}>
          
        </div>

        {/* Form Section */}
        <div className="mt-5 d-flex flex-column align-items-center flex-grow-1" style={{ zIndex: 2, width: '100%', }}>
          <h1 className="text-dark">{activeTab === "signUp" ? "Find Faster, Live Better" : "Welcome Back!"}</h1>
          <p>{activeTab === "signUp" ? "Create an account and get started" : "Sign in to continue your journey"}</p>
          
          {/* Tab Buttons */}
          {/* <div className="mb-4">
            <button className={`btn ${activeTab === "userLogin" ? "btn-dark" : "btn-outline-dark"} mx-2`} onClick={() => handleTabChange("userLogin")}>User Login</button>
            <button className={`btn ${activeTab === "signUp" ? "btn-dark" : "btn-outline-dark"} mx-2`} onClick={() => handleTabChange("signUp")}>Sign Up</button>
          </div> */}

          {/* Card Section */}
          <div className="card shadow p-5" style={{ width: '400px', borderRadius: '20px', border: 'none', backgroundColor: '#FFE8CC' }}>
            <h2 className="text-center mb-4" style={{ color: '#FF7A00', fontWeight: 'bold' }}>
              {activeTab === "signUp" ? "Sign Up" : "Sign In"}
            </h2>
            <p className="text-center text-muted mb-4">
              {activeTab === "signUp" ? "Fill in your details to create an account" : "Enter your credentials to access your account"}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* User Sign Up Form */}
              {activeTab === "signUp" && (
                <>
                  
                  <div className="mb-4">
                    <label className="form-label"><strong>Phone Number:</strong></label>
                    <input type="tel" name="phone" className="form-control" placeholder="+1234567890" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label"><strong>Email:</strong></label>
                    <input type="email" name="email" className="form-control" placeholder="example@mail.com" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label"><strong>Password:</strong></label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                  </div>
                </>
              )}

              {/* User Login Form */}
              {activeTab === "userLogin" && (
                <>
                  <div className="mb-4">
                    <label className="form-label"><strong>Phone Number:</strong></label>
                    <input type="tel" name="phone" className="form-control" placeholder="+1234567890" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label"><strong>Password:</strong></label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn w-100 mb-4" style={{ backgroundColor: '#FF7A00', color: 'white', fontWeight: 'bold', borderRadius: '10px' }}>
                {activeTab === "signUp" ? "Sign Up" : "Login"}
              </button>

              {/* Sign Up Prompt for Login */}
              {activeTab === "userLogin" && (
                <div className="text-center">
                  <span className="text-muted">Don't Have an Account? </span>
                  <button type="button" className="btn btn-link p-0" onClick={() => handleTabChange("signUp")} style={{ color: '#FF7A00', fontWeight: 'bold', textDecoration: 'none' }}>
                    Sign Up
                  </button>
                </div>
              )}

              {/* Login Prompt for Sign Up */}
              {activeTab === "signUp" && (
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => handleTabChange("userLogin")}
                    style={{ color: '#FF7A00', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    Login Now
                  </button>
                </div>
              )}

            </form>

            {/* Social Login Options */}
            {activeTab === "userLogin" && (
              <div className="d-flex justify-content-center mt-3 mb-4" style={{ gap: '15px' }}>
                <FaGoogle size={30} style={{ color: '#DB4437', cursor: 'pointer' }} />
                <FaFacebook size={30} style={{ color: '#4267B2', cursor: 'pointer' }} />
                
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LoginSignup;
