import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";   // Import Navbar component

// Simulated data (replace with real API or state management if needed)
const properties = [
  {
    id: 1,
    title: 'Sublate room',
    price: '$1,250,000',
    location: 'Badda, Dhaka',
    image: '/src/assets/images/house-1.jpg',
    description: 'A cozy sublate room in a prime location.',
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
  },
  {
    id: 2,
    title: 'Family flat',
    price: '$1,250,000',
    location: 'Badda',
    image: '/src/assets/images/house-2.jpg',
    description: 'A spacious family flat with great amenities.',
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
  },
];

const PropertyDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Navbar Component */}
      <Navbar /> 

      <div className="container mx-auto mt-10">
        <div className="property-details bg-white shadow-lg rounded p-6">
          {/* Property Image */}
          <div className="image-container mb-4">
            <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded" />
          </div>

          {/* Property Details */}
          <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
          <p className="text-xl text-gray-700 mb-2">{property.price}</p>
          <p className="text-gray-600 mb-4">{property.location}</p>

          {/* Additional Details */}
          <div className="text-gray-800">
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p><strong>Area:</strong> {property.area} SqFt</p>
            <p>{property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
