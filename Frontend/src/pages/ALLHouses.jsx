import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropertyCard from "./../components/PropertyCard";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import axios from "axios";

const AllHouses = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties from the backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/api/properties");
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
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* AllHouses Content */}
      <section
        className="container mx-auto px-4 py-8"
        style={{ marginTop: "80px" }}
      >
        {/* First Row: Featured for Rent */}
        <div className="mb-12">
          <h1
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "rgb(8, 8, 112)" }}
          >
            FEATURED FOR RENT
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Mousewheel]}
              mousewheel={{
                forceToAxis: true,
              }}
              loop={true}
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

        {/* Second Row: Bachelor House */}
        <div className="mb-12">
          <h1
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "rgb(8, 8, 112)" }}
          >
            Bachelor House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Mousewheel]}
              mousewheel={{
                forceToAxis: true,
              }}
              loop={true}
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
              {properties
                .filter((property) => property.propertyType === "Bachelor")
                .map((property) => (
                  <SwiperSlide key={property._id}>
                    <PropertyCard property={property} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Third Row: Family House */}
        <div className="mb-12">
          <h1
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "rgb(8, 8, 112)" }}
          >
            Family House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Mousewheel]}
              mousewheel={{
                forceToAxis: true,
              }}
              loop={true}
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
              {properties
                .filter((property) => property.propertyType === "Family")
                .map((property) => (
                  <SwiperSlide key={property._id}>
                    <PropertyCard property={property} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Fourth Row: Sublet House */}
        <div className="mb-12">
          <h1
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "rgb(8, 8, 112)" }}
          >
            Sublet House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Mousewheel]}
              mousewheel={{
                forceToAxis: true,
              }}
              loop={true}
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
              {properties
                .filter((property) => property.propertyType === "Sublet")
                .map((property) => (
                  <SwiperSlide key={property._id}>
                    <PropertyCard property={property} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default AllHouses;