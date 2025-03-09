import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PropertyCard from "./../components/PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";

const PropertySlider = () => {
  const [properties, setProperties] = useState([]); // State to store fetched properties
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch properties from the backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/properties"
        );
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load properties. Please try again later.");
        setLoading(false);
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, []);

  if (loading)
    return <div className="loading-container">Loading properties...</div>;
  if (error) return <div className="error-container">{error}</div>;

  return (
    <div className="row mt-5 w-100">
      {/* Left Column: Heading */}
      <div className="col-5 text-center mt-5">
        <h1 className="text-3xl font-bold mt-5 " style={{ color: "#000966" }}>
          TRENDING HOUSES
        </h1>
        <p className="text-muted mt-4">Discover the best home to your needs.</p>
      </div>

      {/* Right Column: Swiper Slider */}
      <div className="col-7 position-relative">
        <Swiper
          style={{
            "--swiper-pagination-bottom": "-5px", // Adjust the value as needed
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={false}
          grabCursor={true}
          speed={500}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel]}
          mousewheel={{
            sensitivity: 0.5, // Reduce sensitivity
            forceToAxis: true, // Only horizontal scrolls will trigger the slider
            releaseOnEdges: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property._id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PropertySlider;
