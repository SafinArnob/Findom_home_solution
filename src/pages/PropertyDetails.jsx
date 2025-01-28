import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState(null);

  // Simulated data source
  const properties = [
    {
      id: 1,
      title: 'Sublate room',
      price: '$1,250,000',
      location: 'Badda, Dhaka',
      image: '/src/assets/images/house-1.jpg',
      description: 'A cozy sublate room in a prime location.',
    },
    {
      id: 2,
      title: 'Family flat',
      price: '$1,250,000',
      location: 'Badda',
      image: '/src/assets/images/house-2.jpg',
      description: 'A spacious family flat with great amenities.',
    },
    // Add other properties here...
  ];

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="property-details bg-white shadow-lg rounded p-6">
        <div className="image-container mb-4">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
        <p className="text-xl text-gray-700 mb-2">{property.price}</p>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-gray-800">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
