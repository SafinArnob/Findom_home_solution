import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/HouseHelper.module.css'; // Import the CSS Module

const HouseHelper = () => {
  const [houseHelpers, setHouseHelpers] = useState([
    { id: 1, name: 'Rina Akter', service: ['House Cleaning', 'Cooking'], price: 1000, rating: 4.5, image: 'https://img.freepik.com/premium-photo/backdrop-housekeeper_931878-455773.jpg', location: 'Dhaka', phone: '01712345678' },
    { id: 2, name: 'Mina Begum', service: ['Cooking'], price: 500, rating: 4.2, image: '/src/assets/images/maid-3.jpg', location: 'Chittagong', phone: '01787654321' },
    { id: 3, name: 'Tania Islam', service: ['Cloth Washing', 'House Cleaning'], price: 800, rating: 4.0, image: '/src/assets/images/maid-2.jpg', location: 'Dhaka', phone: '01711223344' },
    { id: 4, name: 'Sadia Rahman', service: ['Toilet Cleaning'], price: 1000, rating: 4.7, image: '/src/assets/images/maid-4.jpg', location: 'Rajshahi', phone: '01755667788' },
    { id: 5, name: 'Farhana Akter', service: ['House Cleaning'], price: 1200, rating: 4.8, image: '/src/assets/images/maid-1.jpg', location: 'Khulna', phone: '01799887766' },
    { id: 6, name: 'Hasina Bibi', service: ['Cooking', 'Ironing'], price: 600, rating: 4.1, image: '/src/assets/images/maid-5.jpg', location: 'Dhaka', phone: '01733445566' },
    { id: 7, name: 'Lima Khatun', service: ['House Cleaning', 'Baby Sitting'], price: 1100, rating: 4.6, image: '/src/assets/images/maid-8.jpg', location: 'Sylhet', phone: '01777889900' },
    { id: 8, name: 'Nasima Akter', service: ['Cloth Washing'], price: 750, rating: 4.3, image: '/src/assets/images/maid-9.jpg', location: 'Barisal', phone: '01799001122' },
    { id: 9, name: 'Shila Rahman', service: ['Toilet Cleaning', 'Gardening'], price: 950, rating: 4.9, image: '/src/assets/images/maid-7.jpg', location: 'Dhaka', phone: '01722334455' },
    { id: 10, name: 'Firoza Begum', service: ['House Cleaning', 'Cooking'], price: 1050, rating: 4.4, image: '/src/assets/images/maid-6.jpg', location: 'Chittagong', phone: '01766778899' },
    { id: 11, name: 'Ayesha Akter', service: ['Ironing'], price: 400, rating: 4.3, image: 'https://via.placeholder.com/150', location: 'Dhaka', phone: '01755443322' },
    { id: 12, name: 'Rahima Begum', service: ['Laundry', 'Cloth Washing'], price: 700, rating: 4.6, image: 'https://via.placeholder.com/150', location: 'Rajshahi', phone: '01711223344' },
    { id: 13, name: 'Sultana Rahman', service: ['Dish Washing'], price: 300, rating: 4.2, image: 'https://via.placeholder.com/150', location: 'Khulna', phone: '01799887766' },
    { id: 14, name: 'Nazma Khatun', service: ['Baby Sitting'], price: 1500, rating: 4.8, image: 'https://via.placeholder.com/150', location: 'Sylhet', phone: '01733445566' },
    { id: 15, name: 'Jahanara Begum', service: ['Gardening'], price: 900, rating: 4.5, image: 'https://via.placeholder.com/150', location: 'Barisal', phone: '01777889900' },
  ]);

  const [filters, setFilters] = useState({
    services: [],
    minPrice: 0,
    maxPrice: 2000,
    location: '',
  });

  const [sortCriteria, setSortCriteria] = useState('');

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...filters.services, value]
        : filters.services.filter(service => service !== value);

      setFilters({ ...filters, services: updatedServices });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const resetFilters = () => {
    setFilters({
      services: [],
      minPrice: 0,
      maxPrice: 2000,
      location: '',
    });
    setSortCriteria('');
  };

  const filteredHouseHelpers = houseHelpers.filter(helper => (
    (filters.services.length === 0 || filters.services.some(service => helper.service.includes(service))) &&
    (filters.location === '' || helper.location === filters.location) &&
    helper.price >= filters.minPrice &&
    helper.price <= filters.maxPrice
  ));

  const sortedHouseHelpers = [...filteredHouseHelpers].sort((a, b) => {
    if (sortCriteria === 'price') {
      return a.price - b.price;
    } else if (sortCriteria === 'rating') {
      return b.rating - a.rating;
    } else if (sortCriteria === 'location') {
      return a.location.localeCompare(b.location);
    } else {
      return 0;
    }
  });

  const handleBookNow = (phone) => {
    alert(`Call ${phone} to book now!`);
  };

  return (
    <div className={styles.houseHelperContainer}>
      <Navbar />
      <div className={styles.houseHelperWideImageContainer}>
        <img
          src="https://th.bing.com/th/id/R.7bcc3c3df0538c43736582331638dcd7?rik=fYHlxNxbHZZh8g&riu=http%3a%2f%2fstyledegree.sg%2fwp-content%2fuploads%2f2021%2f10%2fCommunication-With-Your-Helper-Feature-Image-StyleMag.jpg&ehk=TKkyNX0pWUJ7qbzBfLaloqGrXaYrEmlGMzActpRDJWs%3d&risl=&pid=ImgRaw&r=0"
          alt="House Helper Services"
          className={styles.houseHelperFullImage}
        />
      </div>

      <div className={`${styles.houseHelperFilterSystem} container mt-4`}>
        <div className="row g-4">
          {/* Services Column */}
          <div className="col-md-6">
            <div className="p-3 h-100">
              <label className={`${styles.formLabel} fw-bold mb-3`}>Services</label>
              <div className="row row-cols-2">
                {[
                  'House Cleaning', 'Cooking', 'Cloth Washing', 'Toilet Cleaning',
                  'Ironing', 'Laundry', 'Dish Washing', 'Baby Sitting', 'Gardening'
                ].map(service => (
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
                  <option value="Barisal">Barisal</option>
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
                onClick={resetFilters}
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
        <h2 className={styles.houseHelperH2}>Available House Helpers</h2>
        <div className="row">
          {sortedHouseHelpers.map(helper => (
            <div key={helper.id} className="col-md-4 mb-4">
              <div className={`${styles.houseHelperCard} card`}>
                <img src={helper.image} alt={helper.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className={styles.houseHelperCardTitle}>{helper.name}</h5>
                  <p className={styles.houseHelperCardText}><strong>Services:</strong> {helper.service.join(', ')}</p>
                  <p className={styles.houseHelperCardText}><strong>Location:</strong> {helper.location}</p>
                  <p className={styles.houseHelperCardText}><strong>Price:</strong> {helper.price} TK/month</p>
                  <p className={styles.houseHelperCardText}><strong>Rating:</strong> {helper.rating} ⭐</p>
                  <p className={styles.houseHelperCardText}><strong>Phone:</strong> {helper.phone}</p>
                  <button
                    className="btn w-100 mt-3"
                    onClick={() => handleBookNow(helper.phone)}
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      padding: '10px',
                      fontSize: '16px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseHelper;