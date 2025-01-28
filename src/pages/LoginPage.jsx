import { useState } from 'react';
import { FaGoogle, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import Navbar from "../components/Navbar";   // Import the Navbar component

import AboutUs from './AboutUs';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Login/Signup Section */}
      <div
        className="d-flex vh-100 position-relative"
        style={{
          backgroundColor: '#FFF7E6',
          overflow: 'hidden',
        }}
      >
        {/* Curved Shade for Sign Up with Image */}
        {isSignUp && (
          <div
            className="position-absolute"
            style={{
              width: '50%',
              height: '100%',
              backgroundColor: '#FF7A00',
              borderTopLeftRadius: '100% 50%',
              borderBottomLeftRadius: '100% 50%',
              top: 0,
              right: 0,
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            <img
              src="/path-to-your-image.jpg" // Replace with your image path
              alt="Sign Up"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        {/* Curved Shade for Sign In with Image */}
        {!isSignUp && (
          <div
            className="position-absolute"
            style={{
              width: '50%',
              height: '100%',
              backgroundColor: '#FF7A00',
              borderTopRightRadius: '100% 50%',
              borderBottomRightRadius: '100% 50%',
              top: 0,
              left: 0,
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            <img
              src="/path-to-your-image.jpg" // Replace with your image path
              alt="Sign In"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        <div
          className="d-flex justify-content-center align-items-center flex-grow-1"
          style={{
            zIndex: 2,
          }}
        >
          <div className="text-center text-dark">
            <h1>{isSignUp ? 'Find Faster \t live better ' : 'Welcome Back!'}</h1>
            <p>{isSignUp ? 'Create an account and get started' : 'Sign in to continue your journey'}</p>
            <button
              className="btn btn-outline-dark mt-4"
              style={{ borderRadius: '30px', fontWeight: 'bold' }}
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>

        <div
          className="d-flex justify-content-center align-items-center flex-grow-1"
          style={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            className="card shadow p-5"
            style={{
              width: '400px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: '#FFE8CC',
            }}
          >
            <h2
              className="text-center mb-4"
              style={{
                color: '#FF7A00',
                fontWeight: 'bold',
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>
            <p className="text-center text-muted mb-4">
              {isSignUp ? 'Fill in your details to create an account' : 'Enter your credentials to access your account'}
            </p>
            {isSignUp && (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    <strong>Name:</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    <strong>Phone Number:</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+1234567890"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    <strong>Email:</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@mail.com"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    <strong>Password:</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
              </>
            )}
            {!isSignUp && (
              <>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    <strong>Phone Number:</strong>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+1234567890"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    <strong>Password:</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    style={{ borderColor: '#FFB85C' }}
                  />
                </div>
              </>
            )}
            <button
              className="btn w-100 mb-4"
              style={{
                backgroundColor: '#FF7A00',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '10px',
              }}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>

            {/* Social Login Options */}
            <div
              className="d-flex justify-content-center mt-3"
              style={{
                gap: '15px',
              }}
            >
              <FaGoogle
                size={30}
                style={{ color: '#DB4437', cursor: 'pointer' }}
              />
              <FaFacebook
                size={30}
                style={{ color: '#4267B2', cursor: 'pointer' }}
              />
              <FaTwitter
                size={30}
                style={{ color: '#1DA1F2', cursor: 'pointer' }}
              />
              <FaLinkedin
                size={30}
                style={{ color: '#0077B5', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <AboutUs />
    </>
  );
};

export default LoginSignup;