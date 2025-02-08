import { MdOutlineLocationOn } from "react-icons/md";
import { FaClock, FaEye, FaRegStar, FaShareAlt } from "react-icons/fa";
import '../styles/DetailsPage.css'
import Navbar from "../components/Navbar"; 


const DetailsPage = () => {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />

    <div className="details-container mt-4">
      <div className="img-section">
          <div className="container">
              <div className="row">
              {/* Header Section */}
              <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              {/* Badges */}
              <span className="badge featured-badge">FEATURED</span>
              <span className="badge sale-badge">FOR SALE</span>

              {/* Time & Views */}
              <div className="d-flex align-items-center text-muted">
                <FaClock className="me-1" />
                <span className="me-2">4 years ago</span>
                <FaEye className="me-1" />
                <span>1753 views</span>
              </div>
            </div>

              {/* Action Buttons */}
              <div className="d-flex gap-2">
                <button className="icon-btn">
                  <FaRegStar />
                </button>
                {/* <button className="icon-btn">
                  <FaPlus />
                </button> */}
                <button className="icon-btn">
                  <FaShareAlt />
                </button>
                {/* <button className="icon-btn">
                  <FaSave />
                </button> */}
              </div>
            </div>
          </div>

          <div className="row home-location">
            <div className="col-8">
              <h1>Store in Woodside, New York</h1>
              <p className="text-muted">
                    <MdOutlineLocationOn /> 39-11 61st St, Woodside, New York
              </p>
            </div>
            <div className="col-4">
              <h2 className="text-end">$1,250,000</h2>
            </div>
          </div>


          {/* Image Gallery */}
          <div className="row">
            <div className="d-flex gap-2 mt-3">
              <div className="flex-grow-1">
                <img
                  src="/src/assets/images/house-1.jpg"
                  alt="Main"
                  className="img-fluid rounded"
                  style={{ height: "300px", objectFit: "cover" }} // Adjust height here
                />
              </div>
              <div className="d-flex flex-column gap-2">
                {[
                  "/src/assets/images/house-1.jpg",
                  "/src/assets/images/house-2.jpg",
                  "/src/assets/images/house-3.jpg",
                  "/src/assets/images/house-4.jpg",
                ].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Thumbnail ${idx}`}
                    className="img-fluid rounded"
                    style={{ height: "80px", objectFit: "cover" }} // Adjust thumbnail height
                  />
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>

      {/* Description Section */}
      <div className="container box">
        <div className="mt-4">
          <h3>Description</h3>
          <p className="text-muted">
            Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit aliquet.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container box">
          <div className=" overview-section">
            <h2>Overview</h2>
            <div className="row">
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">ID</div>
                            <div className="stat-value">2297</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Type</div>
                            <div className="stat-value">House</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 22v-7.5h6V22"></path>
                            <path d="M21 22v-7.5h-6V22"></path>
                            <path d="M3 9l9-7 9 7"></path>
                            <path d="M13.5 14.5h-3v3h3z"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Bedrooms</div>
                            <div className="stat-value">3</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 14h4"></path>
                            <path d="M17 14h4"></path>
                            <path d="M3 7h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
                            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Bathrooms</div>
                            <div className="stat-value">2</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                            <path d="M3 8h18"></path>
                            <path d="M8 3v18"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Garages</div>
                            <div className="stat-value">1</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                            <path d="M3 12h18"></path>
                            <path d="M12 3v18"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Size</div>
                            <div className="stat-value">900 SqFt</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 21H3v-7.5h18V21z"></path>
                            <path d="M3 9l9-7 9 7"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Land Size</div>
                            <div className="stat-value">2,000 SqFt</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-6 col-md-3">
                    <div className="property-stat">
                        <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 20h20"></path>
                            <path d="M5 20v-8l7-4 7 4v8"></path>
                            <path d="M12 8V4"></path>
                        </svg>
                        <div className="stat-content">
                            <div className="stat-label">Year Built</div>
                            <div className="stat-value">2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="container box">
      <div className="mt-4">
        <h3>Address</h3>
        <p>Address: 39-11 61st St, Woodside, New York</p>
        <p>Country: United States</p>
        <p>City/Town: New York</p>
        <p>Province/State: New York</p>
        <p>Neighborhood: South New York</p>
      </div>
      </div>

      {/* Details Section */}
      <div className="container box">
      <div className="mt-4">
        <h3>Details</h3>
        <p>Property ID: 2297</p>
        <p>Property Type: House</p>
        <p>Price: $1,250,000</p>
        <p>Rooms: 4</p>
        <p>Bathrooms: 2</p>
        <p>Year Built: 2020</p>
        <p>Land Area: 2,000 SqFt</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default DetailsPage;
