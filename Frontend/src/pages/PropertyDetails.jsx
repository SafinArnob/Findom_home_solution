import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Heart,
  Plus,
  Share2,
  MapPin,
  Home,
  Bed,
  Bath,
  Calendar,
  User,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../styles/DetailsPage.css";

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const propertyId = useParams();
  console.log("Property ID from URL:", propertyId);

  // Fetch all properties from the backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        console.log("Fetching properties...");
        const response = await axios.get(
          "http://localhost:8080/api/properties"
        );
        console.log("API Response:", response.data);

        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid data format");
        }

        setProperties(response.data);

        // Log all property IDs for debugging
        console.log(
          "Fetched Properties IDs:",
          response.data.map((p) => p._id)
        );

        if (!propertyId) {
          setError("No property ID found in URL. Please check the URL.");
          setLoading(false);
          return;
        }

        // Find the specific property by propertyId
        let property;
        console.log("res dta", response.data);
        response.data.forEach((pp) => {
          console.log("pp._id", pp._id);
          console.log("propertyId", propertyId.id);
          if (pp._id === propertyId.id) {
            console.log("Found Property: ", pp);
            property = pp;
            //   break;
          }
        });
        //    const property = response.data.find((p) => p._id === propertyId);
        // console.log("Found Property:", property);

        if (property) {
          setPropertyData(property);
        } else {
          setError("Property not found. Please check the URL.");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(
          err.response
            ? `Failed to load properties: ${err.response.data.message}`
            : "Network error. Please check your connection."
        );
        setLoading(false);
      }
    };

    fetchProperties();
  }, [propertyId]);

  // Open image modal
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Close image modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading)
    return <div className="loading-container">Loading property details...</div>;
  if (error) return <div className="error-container">{error}</div>;
  if (!propertyData)
    return <div className="error-container">No property data found.</div>;

  return (
    <>
      <Navbar />
      <div className="details-container">
        {/* Header Section */}
        <div className="details-header">
          <div className="details-left-section">
            <div className="details-tags">
              <span className="details-featured">FEATURED</span>
              <span className="details-for-sale">
                FOR {propertyData.status}
              </span>
              <span className="details-time-views">
                <span>{propertyData.postedTime}</span>
                <span>{propertyData.views} views</span>
              </span>
            </div>
            <h1 className="details-title">{propertyData.title}</h1>
            <p className="details-address">{propertyData.address}</p>
          </div>
          <div className="details-right-section">
            <div className="details-action-buttons">
              <button>
                <Heart size={20} />
              </button>
              <button>
                <Plus size={20} />
              </button>
              <button>
                <Share2 size={20} />
              </button>
            </div>
            <div className="details-price">{propertyData.price}</div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="details-image-grid">
          <div className="details-main-image" onClick={() => openModal(0)}>
            <img src={propertyData.images[0]} alt="Main view" />
          </div>
          <div className="details-side-images">
            {propertyData.images.slice(1).map((image, index) => (
              <div key={index} onClick={() => openModal(index + 1)}>
                <img src={image} alt={`View ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Description and Overview Section */}
        <div className="details-description">
          <h2>Description</h2>
          <p>{propertyData.description}</p>
        </div>

        <div className="details-overview">
          <div className="details-overview-item">
            <Home />
            <div>
              <h3>Type</h3>
              <p>{propertyData.propertyType}</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Bed />
            <div>
              <h3>Bedrooms</h3>
              <p>{propertyData.bedrooms}</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Bath />
            <div>
              <h3>Bathrooms</h3>
              <p>{propertyData.bathrooms}</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Calendar />
            <div>
              <h3>Year Built</h3>
              <p>{propertyData.yearBuilt}</p>
            </div>
          </div>
        </div>

        {/* Property Details and Features Section */}
        <div className="details-property-features">
          <div className="details-property-details">
            <h2>Details</h2>
            <table>
              <tbody>
                <tr>
                  <td>Property ID</td>
                  <td>{propertyData._id}</td>
                  <td>Price</td>
                  <td>{propertyData.price}</td>
                </tr>
                <tr>
                  <td>Property Type</td>
                  <td>{propertyData.propertyType}</td>
                  <td>Property Status</td>
                  <td>{propertyData.status}</td>
                </tr>
                <tr>
                  <td>Rooms</td>
                  <td>{propertyData.rooms}</td>
                  <td>Bedrooms</td>
                  <td>{propertyData.bedrooms}</td>
                </tr>
                <tr>
                  <td>Bathrooms</td>
                  <td>{propertyData.bathrooms}</td>
                  <td>Year Built</td>
                  <td>{propertyData.yearBuilt}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{propertyData.size} SqFt</td>
                  <td>Land Area</td>
                  <td>{propertyData.landArea} SqFt</td>
                </tr>
                <tr>
                  <td>Garages</td>
                  <td>{propertyData.garages}</td>
                  <td>Garage Area</td>
                  <td>{propertyData.garageArea} SqFt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="details-features">
            <h2>Features</h2>
            <ul>
              {propertyData.features &&
                Object.entries(propertyData.features).map(
                  ([feature, value]) =>
                    value && <li key={feature}>{feature}</li>
                )}
            </ul>
          </div>
        </div>

        {/* Rating & Reviews Section */}
        <div className="details-rating-reviews">
          <h2>Rating & Reviews</h2>
          <div className="details-average-rating">
            <h3>Average User Rating</h3>
            <p>4.7/ 5</p>
          </div>
          <div className="details-rating-breakdown">
            <h3>Rating Breakdown</h3>
            <div className="rating-bars">{/* Rating bars logic here */}</div>
          </div>
          <div className="details-write-review">
            <h3>Write A Review</h3>
            <p>
              You must be{" "}
              <button className="btn text-danger">logged in </button> to post a
              review.
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="details-address-section">
          <h2>Address</h2>
          <p>
            <strong>Address:</strong> {propertyData.address}
          </p>
          <p>
            <strong>Country:</strong> {propertyData.country || "N/A"}
          </p>
          <p>
            <strong>City/Town:</strong> {propertyData.city || "N/A"}
          </p>
          <button className="show-on-map-button">
            <MapPin size={20} /> Show on Map
          </button>
        </div>

        {/* Contact Section */}
        <div className="details-contact-section">
          <h2>Contact</h2>
          <div className="details-contact-info">
            <User />
            <p>
              <strong>{propertyData.creator?.name || "N/A"}</strong> - Real
              estate broker
            </p>
          </div>
          <div className="details-contact-info">
            <Phone />
            <p>{propertyData.creator?.phone || "N/A"}</p>
          </div>
          <div className="details-contact-info">
            <Mail />
            <p>{propertyData.creator?.email || "N/A"}</p>
          </div>
          <form className="details-contact-form">
            <input type="text" placeholder="Full Name *" required />
            <input type="tel" placeholder="Phone Number *" required />
            <input type="email" placeholder="Email Address *" required />
            <textarea
              placeholder="Hello, I am interested in Store in Woodside."
              rows="4"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Modal for Image Carousel */}
      {isModalOpen && (
        <div className="details-modal-overlay" onClick={closeModal}>
          <div
            className="details-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              initialSlide={selectedImageIndex}
              className="details-modal-swiper"
            >
              {propertyData.images &&
                propertyData.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`View ${index}`} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PropertyDetails;
