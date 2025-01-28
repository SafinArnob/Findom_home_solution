import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PropertyCard from './../components/PropertyCard';
import Navbar from "../components/Navbar";   // Import the Navbar component
import AboutUs from './AboutUs';

const AllHouses = () => {
  // Sample data for properties
  const properties = [
    {
      id: 1,
      title: 'Sublate room',
      price: '$1,250,000',
      location: 'Badda, Dhaka',
      image: '/src/assets/images/house-1.jpg', // Local image path
    },
    {
      id: 2,
      title: 'Family flat',
      price: '$1,250,000',
      location: 'Badda',
      image: '/src/assets/images/house-2.jpg', // Local image path
    },
    {
      id: 3,
      title: 'Sublate',
      price: '$1,250,000',
      location: 'Modhubag',
      image: '/src/assets/images/house-3.jpg', // Local image path
    },
    {
      id: 4,
      title: 'Apartment',
      price: '$2,500,000',
      location: 'Collage Gate',
      image: '/src/assets/images/house-4.jpg', // Local image path
    },
    {
      id: 5,
      title: 'Bachelor',
      price: '$3,000,000',
      location: 'Rampura',
      image: '/src/assets/images/house-5.jpg', // Local image path
    },
    {
      id: 6,
      title: 'Hostel',
      price: '$3,000,000',
      location: 'Mohanagar',
      image: '/src/assets/images/house-5.jpg', // Local image path
    },
  ];

  return (
    <>
      {/* Navbar Section */}
      <Navbar /> {/* Include the Navbar component here */}

      {/* AllHouses Content */}
      <section className="container mx-auto px-4 py-8" style={{ marginTop: '80px' }}>
        {/* First Row */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
            FEATURED FOR RENT
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Second Row */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
            Bachelor House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Third Row */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
            Family House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Fourth Row: Sublet House */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
            Sublet House
          </h1>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <AboutUs /> 
    </>
  );
};

export default AllHouses;