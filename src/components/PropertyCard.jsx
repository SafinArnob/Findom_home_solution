import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card bg-white shadow rounded overflow-hidden" style={{ width: '100%', height: '450px' }}>
      {/* Property Image */}
      <div className="image-container" style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.price}</p>
        <p className="text-sm text-gray-500 mb-4">{property.location}</p>

        {/* Description Box */}
        {property.description && (
          <div className="description-box bg-gray-100 p-3 rounded">
            <p className="text-sm text-gray-700">{property.description}</p>
          </div>
        )}

        {/* View Details Button */}
        <div className="mt-3">
  <button
    style={{
      backgroundColor:'rgb(243, 114, 9)', // Orange color (hex code)
      color: '#fff', // White text
      padding: '0.5rem 1rem', // Equivalent to px-4 py-2
      borderRadius: '0.375rem', // Equivalent to rounded
      transition: 'background-color 0.3s ease', // Equivalent to transition
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = '#f97316')} // Hover effect
    onMouseLeave={(e) => (e.target.style.backgroundColor = '#fb923c')} // Reset on mouse leave
  >
    View Details
  </button>
</div>

      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;