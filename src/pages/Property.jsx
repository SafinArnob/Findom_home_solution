import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules'; // Import Mousewheel module
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import PropertyCard from './../components/PropertyCard';

const PropertySlider = () => {
  const properties = [
    {
      id: 1,
      title: 'Sublate room',
      price: '$1,250,000',
      location: 'Badda, Dhaka',
      image: 'hous1.jpg',
    },
    {
      id: 2,
      title: 'Family flat',
      price: '$1,250,000',
      location: 'Badda',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 3,
      title: 'Sublate',
      price: '$1,250,000',
      location: 'Modhubag',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 4,
      title: 'Apartment',
      price: '$2,500,000',
      location: 'Collage Gate',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 5,
      title: '1 Room',
      price: '$3,000,000',
      location: 'Rampura',
      image: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <div className="row mt-5">
      {/* Left Column: Heading */}
      <div className="col-5 text-center">
        <h1 className="text-3xl font-bold mb-3">Properties for Sale</h1>
        <p className="text-muted mb-4">Listings we think you will love</p>
      </div>

      {/* Right Column: Swiper Slider */}
      <div className="col-7">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={3} // Number of slides visible at once
          navigation={{
            nextEl: '.swiper-button-next', // Assign next button (optional)
            prevEl: '.swiper-button-prev', // Assign previous button (optional)
          }}
          modules={[Navigation, Mousewheel]} // Add Navigation and Mousewheel modules
          mousewheel={{
            forceToAxis: true, // Restrict mousewheel scrolling to the slider axis
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on large screens
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