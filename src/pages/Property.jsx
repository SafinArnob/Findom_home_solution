import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Import navigation module
import PropertyCard from './../components/PropertyCard';

const PropertySlider = () => {
  const properties = [
    {
      id: 1,
      title: 'Store in Woodside, New York',
      price: '$1,250,000',
      location: 'Woodside, New York',
      image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Hermosa casa al norte',
      price: '$1,250,000',
      location: 'North Region',
      image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Casa Lomas de Machali',
      price: '$1,250,000',
      location: 'Machali, Chile',
      image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    },
    {
      id: 4,
      title: 'Luxury Apartment in Manhattan',
      price: '$2,500,000',
      location: 'Manhattan, New York',
      image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    },
    {
      id: 5,
      title: 'Beach House in Malibu',
      price: '$3,000,000',
      location: 'Malibu, California',
      image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    },
  ];

  return (
    <div className="row mt-5">
      {/* Left Column: Heading and Arrows */}
      <div className="col-5">
        {/* Heading */}
        <h1 className="text-3xl font-bold">Properties for Sale</h1>

        {/* Navigation Arrows (Below the Heading) */}
        <div className="flex gap-4 mt-4 justify-center">
          <div className="swiper-button-prev bg-white shadow rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
            &larr;
          </div>
          <div className="swiper-button-next bg-white shadow rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
            &rarr;
          </div>
        </div>
      </div>

      {/* Right Column: Swiper Slider */}
      <div className="col-7">
        <Swiper
          modules={[Navigation]} // Enable navigation (arrows)
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={20} // Space between slides
          slidesPerView={3} // Number of slides visible at once
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
