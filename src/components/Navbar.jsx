import { useState, useEffect } from 'react'; // Import useState and useEffect
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Track previous scroll position
  const [visible, setVisible] = useState(true); // Control navbar visibility

  // Function to handle navigation to the Login page
  const handleLoginRegisterClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset; // Get current scroll position

      // Determine scroll direction
      if (prevScrollPos > currentScrollPos) {
        setVisible(true); // Show navbar when scrolling up
      } else {
        setVisible(false); // Hide navbar when scrolling down
      }

      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm"
      style={{
        transition: 'top 0.3s',
        top: visible ? '0' : '-70px', // Hide/show navbar based on scroll
        paddingTop: '0.5rem', // Reduce padding to make navbar narrower
        paddingBottom: '0.5rem', // Reduce padding to make navbar narrower
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center me-auto" style={{ marginLeft: '20px' }}> {/* Added marginLeft */}
          <a className="navbar-brand" href="/">
            <img
              src="/src/assets/images/logo_processed.jpg" // Replace with your logo path
              alt="Logo"
              style={{ height: '60px', width: '60px' }} // Increased logo size
            />
          </a>
        </div>

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
          <ul className="navbar-nav mx-auto" style={{ gap: '1.5rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#listing"
                id="listingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Listing
              </a>
              <ul className="dropdown-menu" aria-labelledby="listingDropdown">
                <li>
                  <a className="dropdown-item" href="#property-status">
                    Property Status
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#property-type">
                    Property Type
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#property-city">
                    Property City
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#agency">
                Agency
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#agent">
                Agent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pages">
                Pages
              </a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3">
            {/* Favorites Icon */}
            <a className="btn btn-link text-dark text-decoration-none" href="#favorites">
              <i className="bi bi-heart"></i> {/* Bootstrap Icons heart icon */}
            </a>

            {/* Add Listing Button */}
            <a
              className="btn btn-outline-dark d-flex align-items-center"
              href="#add-listing"
            >
              <i className="bi bi-house me-2"></i> Add Listing
            </a>

            {/* Login/Register Button */}
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