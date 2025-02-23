import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm border-0 rounded overflow-hidden" style={{ width: '100%', maxWidth: '350px' }}>
      {/* Property Image with Overlay */}
      <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.title}
          className="card-img-top img-fluid"
          style={{ objectFit: 'cover', height: '100%', transition: 'opacity 0.3s' }}
          onMouseEnter={(e) => (e.target.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.target.style.opacity = '1')}
        />

        {/* Badges */}
        <div className="position-absolute top-0 start-0 m-2">
          {property.isFeatured && <span className="badge bg-warning text-dark me-1">FEATURED</span>}
          {property.status && <span className="badge bg-primary">{property.status}</span>}
        </div>
      </div>

      {/* Property Details */}
      <div className="card-body">
        <h5 className="card-title fw-bold">{property.title}</h5>
        <p className="text-danger fs-5 fw-bold">{property.price}</p>
        <p className="text-muted mb-2">{property.location}</p>

        {/* Property Info */}
        <div className="d-flex justify-content-between text-secondary mb-3">
          <div><i className="bi bi-house-door-fill me-1"></i>{property.bedrooms} Br</div>
          <div><i className="bi bi-bathtub-fill me-1"></i>{property.bathrooms} Ba</div>
          <div><i className="bi bi-arrows-fullscreen me-1"></i>{property.area} SqFt</div>
        </div>

        {/* View Details Button */}
        <div className="mt-3">
          <button
            className="btn btn-warning w-100"
            style={{ transition: 'background-color 0.3s' }}
            onClick={() => navigate(`/property/${property.id}`)} // Navigate to PropertyDetails page
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
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    isFeatured: PropTypes.bool,
    status: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;
