import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLoginRegisterClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm"
      style={{
        transition: 'top 0.3s',
        top: visible ? '0' : '-70px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center me-auto" style={{ marginLeft: '20px' }}>
          <Link className="navbar-brand" to="/">
            <img
              src="/src/assets/images/logo_processed.jpg"
              alt="Logo"
              style={{ height: '60px', width: '60px' }}
            />
          </Link>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="listingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rent
              </Link>
              <ul className="dropdown-menu" aria-labelledby="listingDropdown">
                <li>
                  <Link className="dropdown-item" to="/bachelor">
                    Bachelor House
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/family-house">
                    Family House
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Sublate">
                    SubLet House
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hostel">
                    Hostel
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="agencyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="agencyDropdown">
                <li>
                  <Link className="dropdown-item" to="/transportation">
                    Transportation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/labour">
                    Labour
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/house-helper">
                    House Helper
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/maintenance">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about-us">
                    About Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3">
            {/* Favorites Icon */}
            <Link className="btn btn-link text-dark text-decoration-none" to="/favorites">
              <i className="bi bi-heart"></i>
            </Link>

            {/* Add Listing Button */}
            <Link
              className="btn btn-outline-dark d-flex align-items-center"
              to="/upload-details"
            >
              <i className="bi bi-house me-2"></i> Add Listing
            </Link>

            {/* Login/Register Button */}
            <button
              className="btn btn-link text-dark text-decoration-none"
              onClick={handleLoginRegisterClick}
            >
              {isLoggedIn ? "Profile" : "Login/Register"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
