import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import PropertyCard from './../components/PropertyCard';

const PropertySlider = () => {
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
    <div className="row mt-5">
      {/* Left Column: Heading */}
      <div className="col-5 text-center mt-5">
        <h1 className="text-3xl font-bold mt-5 " style={{ color: '#000966' }}>
          TRENDING HOUSES
        </h1>
        <p className="text-muted mt-4">Discover the best home to your needs.</p>
      </div>

      {/* Right Column: Swiper Slider */}
      <div className="col-7">
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
          loop={true} // Enable continuous loop
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
  );
};

export default PropertySlider;