
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation to the Login page
  const handleLoginRegisterClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            style={{ height: '30px' }}
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto" style={{ gap: '2rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#agency">
                Saved Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="listingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Property List
              </a>
              <ul className="dropdown-menu" aria-labelledby="listingDropdown">
                <li>
                  <a className="dropdown-item" href="#action1">
                    Family
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#action2">
                    Bachelor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#action2">
                    Sublate
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-4">
            <a
              className="btn btn-outline-dark d-flex align-items-center"
              href="#add-listing"
            >
              <i className="bi bi-house me-2"></i> Add Listing
            </a>
            <button
              className="btn btn-link text-dark text-decoration-none"
              onClick={handleLoginRegisterClick} // Add onClick handler
            >
              Login/Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;