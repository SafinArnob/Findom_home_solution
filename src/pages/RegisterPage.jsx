

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>

        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            <strong>Name :</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Full Name"
          />
        </div>

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
          <small className="text-muted">Change Country</small>
        </div>

        {/* Create Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            <strong>Create Password :</strong>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        {/* Register Button */}
        <button className="btn btn-primary w-100 mb-3">Register</button>

        {/* Login Link */}
        <p className="text-center mb-2">
          Already have an account? <a href="#login">Login</a>
        </p>

        {/* Forget Password Link */}
        <p className="text-center">
          <a href="#forget-password">Forget Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Register;