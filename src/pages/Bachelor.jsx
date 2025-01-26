import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PropertyCard from './../components/PropertyCard';
import FooterPage from './FooterPage'; // Import the FooterPage component
import Navbar from "../components/Navbar";   // Import the Navbar component

const Bachelor = () => {
  // Sample data for properties
  const propertiesRow1 = [
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

  const propertiesRow2 = [
    {
      id: 7,
      title: 'Luxury Apartment',
      price: '$2,000,000',
      location: 'Gulshan',
      image: '/src/assets/images/house-6.jpg', // Local image path
    },
    {
      id: 8,
      title: 'Modern Villa',
      price: '$3,500,000',
      location: 'Banani',
      image: '/src/assets/images/house-7.jpg', // Local image path
    },
    {
      id: 9,
      title: 'Cozy Studio',
      price: '$1,000,000',
      location: 'Dhanmondi',
      image: '/src/assets/images/house-8.jpg', // Local image path
    },
    {
      id: 10,
      title: 'Penthouse',
      price: '$4,000,000',
      location: 'Uttara',
      image: '/src/assets/images/house-9.jpg', // Local image path
    },
    {
      id: 11,
      title: 'Townhouse',
      price: '$2,800,000',
      location: 'Mirpur',
      image: '/src/assets/images/house-10.jpg', // Local image path
    },
    {
      id: 12,
      title: 'Duplex',
      price: '$3,200,000',
      location: 'Baridhara',
      image: '/src/assets/images/house-11.jpg', // Local image path
    },
  ];

  const propertiesRow3 = [
    {
      id: 13,
      title: 'Country House',
      price: '$1,800,000',
      location: 'Savar',
      image: '/src/assets/images/house-12.jpg', // Local image path
    },
    {
      id: 14,
      title: 'Beach House',
      price: '$5,000,000',
      location: 'Cox\'s Bazar',
      image: '/src/assets/images/house-13.jpg', // Local image path
    },
    {
      id: 15,
      title: 'Mountain Cabin',
      price: '$1,500,000',
      location: 'Sylhet',
      image: '/src/assets/images/house-14.jpg', // Local image path
    },
    {
      id: 16,
      title: 'Lake House',
      price: '$2,200,000',
      location: 'Rangamati',
      image: '/src/assets/images/house-15.jpg', // Local image path
    },
    {
      id: 17,
      title: 'Farmhouse',
      price: '$2,500,000',
      location: 'Comilla',
      image: '/src/assets/images/house-16.jpg', // Local image path
    },
    {
      id: 18,
      title: 'Eco Cottage',
      price: '$1,200,000',
      location: 'Khulna',
      image: '/src/assets/images/house-17.jpg', // Local image path
    },
  ];

  return (
    <>
      {/* Navbar Section */}
      <Navbar /> {/* Include the Navbar component here */}

      {/* Bachelor House Content */}
      <section className="container mx-auto px-4 py-8" style={{ marginTop: '80px' }}>
        {/* First Row for Bachelor House */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
            Most Rated
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
              {propertiesRow1.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Second Row for Luxury Properties */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
             Eligent
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
              {propertiesRow2.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Third Row for Vacation Homes */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(8, 8, 112)' }}>
             Top Viewd
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
              {propertiesRow3.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterPage /> {/* Include the FooterPage component here */}
    </>
  );
};

export default Bachelor;