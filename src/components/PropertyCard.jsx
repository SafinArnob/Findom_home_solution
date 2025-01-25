
import PropTypes from 'prop-types'; // Import PropTypes

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card bg-white shadow rounded overflow-hidden">
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.price}</p>
        <p className="text-sm text-gray-500">{property.location}</p>
        <div className="mt-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;