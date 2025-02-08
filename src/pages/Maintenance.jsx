import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/HouseHelper.module.css'; // Import the CSS Module
import Footer from './Footer';

const Maintenance = () => {
  const [maintenanceServices, setMaintenanceServices] = useState([
    { id: 1, name: 'Rahim Uddin', service: ['Plumbing'], price: 1500, rating: 4.5, experience: '5 years', skills: ['Pipe Repair', 'Leak Fixing'], location: 'Dhaka', phone: '01712345678', availability: 'Available' },
    { id: 2, name: 'Kamal Hossain', service: ['Electrical'], price: 1200, rating: 4.3, experience: '3 years', skills: ['Wiring', 'Circuit Repair'], location: 'Chittagong', phone: '01787654321', availability: 'Available' },
    { id: 3, name: 'Jasim Uddin', service: ['AC Repair'], price: 1000, rating: 4.6, experience: '4 years', skills: ['AC Servicing', 'Cooling Repair'], location: 'Rajshahi', phone: '01733445566', availability: 'Unavailable' },
    { id: 4, name: 'Sultan Ali', service: ['Painting'], price: 1300, rating: 4.2, experience: '6 years', skills: ['Wall Painting', 'Exterior Painting'], location: 'Khulna', phone: '01777889900', availability: 'Available' },
    { id: 5, name: 'Hasan Chowdhury', service: ['Carpentry'], price: 1400, rating: 4.7, experience: '7 years', skills: ['Furniture Repair', 'Woodwork'], location: 'Sylhet', phone: '01799887766', availability: 'Available' },
    { id: 6, name: 'Abdur Rahman', service: ['Appliance Repair'], price: 1100, rating: 4.1, experience: '2 years', skills: ['Refrigerator Repair', 'Washing Machine Repair'], location: 'Rajshahi', phone: '01755555555', availability: 'Available' },
    { id: 7, name: 'Mizanur Rahman', service: ['Plumbing'], price: 1600, rating: 4.4, experience: '8 years', skills: ['Pipe Installation', 'Drain Cleaning'], location: 'Dhaka', phone: '01766666666', availability: 'Unavailable' },
    { id: 8, name: 'Shah Alam', service: ['Electrical'], price: 1050, rating: 4.3, experience: '3 years', skills: ['Switch Repair', 'Light Installation'], location: 'Chittagong', phone: '01777777777', availability: 'Available' },
    { id: 9, name: 'Saiful Islam', service: ['AC Repair'], price: 1350, rating: 4.5, experience: '5 years', skills: ['AC Gas Refill', 'Cooling System Repair'], location: 'Khulna', phone: '01788888888', availability: 'Available' },
    { id: 10, name: 'Rashed Khan', service: ['Carpentry'], price: 1450, rating: 4.2, experience: '4 years', skills: ['Door Repair', 'Furniture Assembly'], location: 'Sylhet', phone: '01799999999', availability: 'Unavailable' },
  ]);

  const [filters, setFilters] = useState({ services: [], minPrice: 0, maxPrice: 2000, location: '' });
  const [sortCriteria, setSortCriteria] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedServices = checked ? [...filters.services, value] : filters.services.filter(service => service !== value);
      setFilters({ ...filters, services: updatedServices });
    } else {
      setFilters({ ...filters, [name]: value });
    }
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    setCurrentPage(1); // Reset to the first page when sorting changes
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const filteredMaintenanceServices = maintenanceServices.filter(service => (
    (filters.services.length === 0 || filters.services.some(filterService => service.service.includes(filterService))) &&
    (filters.location === '' || service.location === filters.location) &&
    service.price >= filters.minPrice &&
    service.price <= filters.maxPrice
  ));

  const sortedMaintenanceServices = [...filteredMaintenanceServices].sort((a, b) => {
    if (sortCriteria === 'price') return a.price - b.price;
    if (sortCriteria === 'rating') return b.rating - a.rating;
    if (sortCriteria === 'location') return a.location.localeCompare(b.location);
    return 0;
  });

  // Pagination logic
  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = sortedMaintenanceServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(sortedMaintenanceServices.length / itemsPerPage);

  const handleBookNow = (phone) => {
    alert(`Call ${phone} to book now!`);
  };

  return (
    <div className={styles.houseHelperContainer}>
      <Navbar />
      <div className={styles.houseHelperWideImageContainer}>
        <img
          src="https://th.bing.com/th/id/OIP.q3GqMbyhByyf4e72WnJPcQHaEJ?rs=1&pid=ImgDetMain"
          alt="Maintenance Services"
          className={styles.houseHelperFullImage}
        />
      </div>

      {/* Filter Box */}
      <div className={`${styles.houseHelperFilterSystem} container mt-4`}>
        <div className="row g-4">
          {/* Services Column */}
          <div className="col-md-6">
            <div className="p-3 h-100">
              <label className={`${styles.formLabel} fw-bold mb-3`}>Services</label>
              <div className="row row-cols-2">
                {['Plumbing', 'Electrical', 'AC Repair', 'Painting', 'Carpentry', 'Appliance Repair'].map(service => (
                  <div className="col mb-2" key={service}>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        id={service.toLowerCase().replace(' ', '-')}
                        className="form-check-input"
                        onChange={handleFilterChange}
                        checked={filters.services.includes(service)}
                      />
                      <label htmlFor={service.toLowerCase().replace(' ', '-')} className="form-check-label">
                        {service}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range Column */}
          <div className="col-md-3">
            <div className="p-3 h-100">
              <div className="mb-4">
                <label htmlFor="minPrice" className={`${styles.formLabel} fw-bold`}>Min Price (TK)</label>
                <input
                  type="number"
                  name="minPrice"
                  id="minPrice"
                  className={`${styles.formControl} form-control`}
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="maxPrice" className={`${styles.formLabel} fw-bold`}>Max Price (TK)</label>
                <input
                  type="number"
                  name="maxPrice"
                  id="maxPrice"
                  className={`${styles.formControl} form-control`}
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>

          {/* Location, Sort, and Reset Column */}
          <div className="col-md-3">
            <div className="p-3 h-100">
              <div className="mb-4">
                <label htmlFor="location" className={`${styles.formLabel} fw-bold`}>Location</label>
                <select
                  name="location"
                  id="location"
                  className={`${styles.formSelect} form-select`}
                  value={filters.location}
                  onChange={handleFilterChange}
                >
                  <option value="">All Locations</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="sort" className={`${styles.formLabel} fw-bold`}>Sort By</label>
                <select
                  name="sort"
                  id="sort"
                  className={`${styles.formSelect} form-select`}
                  value={sortCriteria}
                  onChange={handleSortChange}
                >
                  <option value="">None</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="location">Location</option>
                </select>
              </div>
              <button
                className="btn w-100"
                onClick={() => {
                  setFilters({ services: [], minPrice: 0, maxPrice: 2000, location: '' });
                  setSortCriteria('');
                  setCurrentPage(1); // Reset to the first page when resetting filters
                }}
                style={{
                  backgroundColor: '#FF4500',
                  color: 'white',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  padding: '10px',
                  fontSize: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FF6347'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className={styles.houseHelperH2}>Available Maintenance Services</h2>
        <div className="row d-flex justify-content-between">
          {currentServices.map(service => (
            <div key={service.id} className="col-md-3 mb-4 d-flex">
              <div className={`${styles.houseHelperCard} card shadow-sm d-flex flex-column`} style={{ height: '100%' }}>
                <img src={service.image} alt={service.name} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className={styles.houseHelperCardTitle}>{service.name}</h5>
                  <p className={styles.houseHelperCardText}><strong>Service:</strong> {service.service.join(', ')}</p>
                  <p className={styles.houseHelperCardText}><strong>Location:</strong> {service.location}</p>
                  <p className={styles.houseHelperCardText}><strong>Price:</strong> {service.price} TK</p>
                  <p className={styles.houseHelperCardText}><strong>Experience:</strong> {service.experience}</p>
                  <p className={styles.houseHelperCardText}><strong>Skills:</strong> {service.skills.join(', ')}</p>
                  <p className={styles.houseHelperCardText}><strong>Rating:</strong> {service.rating} ⭐</p>
                  <p className={styles.houseHelperCardText}><strong>Availability:</strong> {service.availability}</p>
                  <button
                    className="btn w-100 mt-3"
                    onClick={() => handleBookNow(service.phone)}
                    style={{
                      backgroundColor: '#FF4500',
                      color: 'white',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      padding: '10px',
                      fontSize: '16px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FF6347'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF4500'}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    style={{
                      backgroundColor: currentPage === index + 1 ? '#FF4500' : '#F5B6A0',
                      color: 'white',
                      borderColor: '#FF4500',
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Maintenance;