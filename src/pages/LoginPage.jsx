import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle navigation to the Register page
  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the Register page
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {/* Phone Number Input */}
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            <strong>Phone Number :</strong>
          </label>
          <div className="input-group">
            <span className="input-group-text">+880</span>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="1812-345678"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password :</strong>
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <small className="text-muted">
            <a href="#forgot-password">I forgot password</a>
          </small>
        </div>

        {/* Login Button */}
        <button className="btn btn-primary w-100 mb-3">Login</button>

        {/* Register Link */}
        <p className="text-center">
          Do not have an account?{' '}
          <a href="#register" onClick={handleRegisterClick}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;