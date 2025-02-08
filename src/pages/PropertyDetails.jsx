import React, { useState } from "react";
import "../styles/DetailsPage.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { Heart, Plus, Share2, Printer, MapPin, Home, Bed, Bath, Calendar, User, Phone, Mail, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const DetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const propertyData = {
    title: "Store in Woodside, New York",
    address: "39-11 61st St, Woodside, New York",
    price: "$1,250,000",
    views: "1853",
    postedTime: "20 Days Ago",
    images: [
      "/src/assets/images/house-1.jpg",
      "/src/assets/images/house-2.jpg",
      "/src/assets/images/house-3.jpg",
      "/src/assets/images/house-4.jpg",
      "/src/assets/images/house-5.jpg",
    ],
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="details-container">
        {/* Header Section */}
        <div className="details-header">
          <div className="details-left-section">
            <div className="details-tags">
              <span className="details-featured">FEATURED</span>
              <span className="details-for-sale">FOR Rent</span>
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
              <button>
                <Printer size={20} />
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
          <p>
            Massa tempor nec feugiat nisi pretium. Egestas fringilla phasellus faucibus scelerisque eleifend
            donec. Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
            quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas
            sed sed risus pretium quam. Dictumst sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis
            at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.
          </p>
        </div>

        <div className="details-overview">
          <div className="details-overview-item">
            <Home />
            <div>
              <h3>Type</h3>
              <p>House</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Bed />
            <div>
              <h3>Bedrooms</h3>
              <p>2,000 SqFt</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Bath />
            <div>
              <h3>Bathrooms</h3>
              <p>2</p>
            </div>
          </div>
          <div className="details-overview-item">
            <Calendar />
            <div>
              <h3>Year Built</h3>
              <p>2020</p>
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
                  <td>2297</td>
                  <td>Price</td>
                  <td>$1,250,000</td>
                </tr>
                <tr>
                  <td>Property Type</td>
                  <td>House</td>
                  <td>Property Status</td>
                  <td>For Sale</td>
                </tr>
                <tr>
                  <td>Rooms</td>
                  <td>4</td>
                  <td>Bedrooms</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Bathrooms</td>
                  <td>2</td>
                  <td>Year Built</td>
                  <td>2020</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>900 SqFt</td>
                  <td>Land Area</td>
                  <td>2,000 SqFt</td>
                </tr>
                <tr>
                  <td>Garages</td>
                  <td>1</td>
                  <td>Garage Area</td>
                  <td>50 SqFt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="details-features">
            <h2>Features</h2>
            <ul>
              <li>✓ Gym</li>
              <li>✓ Laundry</li>
              <li>✓ Lawn</li>
              <li>✓ Microwave</li>
              <li>✓ Outdoor Shower</li>
              <li>✓ Refrigerator</li>
              <li>✓ Sauna</li>
              <li>✓ Swimming Pool</li>
              <li>✓ TV Cable</li>
              <li>✓ Washer</li>
              <li>✓ Wifi</li>
              <li>✓ Window Coverings</li>
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
            <div className="rating-bars">
              {/* 5 Stars */}
              <div className="rating-bar">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="orange" color="orange" />
                  ))}
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "60%" }}></div>
                </div>
                <span>60%</span>
              </div>
              {/* 4 Stars */}
              <div className="rating-bar">
                <div className="stars">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} fill="orange" color="orange" />
                  ))}
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "20%" }}></div>
                </div>
                <span>20%</span>
              </div>
              {/* 3 Stars */}
              <div className="rating-bar">
                <div className="stars">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} size={16} fill="orange" color="orange" />
                  ))}
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "10%" }}></div>
                </div>
                <span>10%</span>
              </div>
              {/* 2 Stars */}
              <div className="rating-bar">
                <div className="stars">
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} size={16} fill="orange" color="orange" />
                  ))}
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "5%" }}></div>
                </div>
                <span>5%</span>
              </div>
              {/* 1 Star */}
              <div className="rating-bar">
                <div className="stars">
                  <Star size={16} fill="orange" color="orange" />
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: "5%" }}></div>
                </div>
                <span>5%</span>
              </div>
            </div>
          </div>
          <div className="details-write-review">
            <h3>Write A Review</h3>
            <p>You must be <button className="btn text-danger">logged in </button>  to post a review.</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="details-address-section">
          <h2>Address</h2>
          <p><strong>Address:</strong> 39-11 GHS St, Woodside, New York</p>
          <p><strong>Country:</strong> United States</p>
          <p><strong>City/Town:</strong> New York</p>
          <button className="show-on-map-button">
            <MapPin size={20} /> Show on Map
          </button>
        </div>

        {/* Contact Section */}
        <div className="details-contact-section">
          <h2>Contact</h2>
          <div className="details-contact-info">
            <User />
            <p><strong>Jimmy Palmer</strong> - Real estate broker</p>
          </div>
          <div className="details-contact-info">
            <Phone />
            <p>+49 0399 909 039</p>
          </div>
          <div className="details-contact-info">
            <Mail />
            <p>b.gordon@homeld.com</p>
          </div>
          <form className="details-contact-form">
            <input type="text" placeholder="Full Name *" required />
            <input type="tel" placeholder="Phone Number *" required />
            <input type="email" placeholder="Email Address *" required />
            <textarea placeholder="Hello, I am interested in Store in Woodside." rows="4" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Modal for Image Carousel */}
      {isModalOpen && (
        <div className="details-modal-overlay" onClick={closeModal}>
          <div className="details-modal-content" onClick={(e) => e.stopPropagation()}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              initialSlide={selectedImageIndex}
              className="details-modal-swiper"
            >
              {propertyData.images.map((image, index) => (
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

export default DetailsPage;