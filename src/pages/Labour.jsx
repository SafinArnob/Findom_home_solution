import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/HouseHelper.module.css'; // Import the CSS Module
import Footer from './Footer';

const Labour = () => {
  const [labours, setLabours] = useState([
    { id: 1, name: 'Rahim Uddin', age: 28, phone: '01712345678', rating: 4.5, experience: '5 years', skills: ['Heavy Lifting', 'Furniture Assembly'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Kamal Hossain', age: 32, phone: '01787654321', rating: 4.3, experience: '3 years', skills: ['Packing', 'Loading'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jasim Uddin', age: 25, phone: '01733445566', rating: 4.6, experience: '4 years', skills: ['Unloading', 'Furniture Disassembly'], availability: 'Unavailable', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Sultan Ali', age: 30, phone: '01777889900', rating: 4.2, experience: '6 years', skills: ['Driving', 'Heavy Lifting'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Hasan Chowdhury', age: 35, phone: '01799887766', rating: 4.7, experience: '7 years', skills: ['Packing', 'Loading'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Abdur Rahman', age: 27, phone: '01755555555', rating: 4.1, experience: '2 years', skills: ['Unloading', 'Furniture Assembly'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Mizanur Rahman', age: 40, phone: '01766666666', rating: 4.4, experience: '8 years', skills: ['Heavy Lifting', 'Driving'], availability: 'Unavailable', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Shah Alam', age: 29, phone: '01777777777', rating: 4.3, experience: '3 years', skills: ['Packing', 'Loading'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Saiful Islam', age: 33, phone: '01788888888', rating: 4.5, experience: '5 years', skills: ['Unloading', 'Furniture Disassembly'], availability: 'Available', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Rashed Khan', age: 31, phone: '01799999999', rating: 4.2, experience: '4 years', skills: ['Heavy Lifting', 'Driving'], availability: 'Unavailable', image: 'https://via.placeholder.com/150' },
  ]);

  const [filters, setFilters] = useState({
    numberOfLabours: 1,
    distance: 0,
    fromFloor: 0,
    toFloor: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: parseInt(value, 10) });
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate price based on filters
  const calculatePrice = () => {
    const basePrice = 500; // Base price per labour
    const distanceRate = 10; // Price per km
    const floorRate = 50; // Price per floor difference

    const distanceCost = filters.distance * distanceRate;
    const floorDifference = Math.abs(filters.toFloor - filters.fromFloor);
    const floorCost = floorDifference * floorRate;

    return (basePrice + distanceCost + floorCost) * filters.numberOfLabours;
  };

  // Filter and sort labours
  const filteredLabours = labours.filter(labour => labour.availability === 'Available');
  const sortedLabours = [...filteredLabours].sort((a, b) => b.rating - a.rating);

  // Pagination logic
  const indexOfLastLabour = currentPage * itemsPerPage;
  const indexOfFirstLabour = indexOfLastLabour - itemsPerPage;
  const currentLabours = sortedLabours.slice(indexOfFirstLabour, indexOfLastLabour);
  const totalPages = Math.ceil(sortedLabours.length / itemsPerPage);

  const handleBookNow = (phone) => {
    alert(`Call ${phone} to book now!`);
  };

  return (
    <div className={styles.houseHelperContainer}>
      <Navbar />
      <div className={styles.houseHelperWideImageContainer}>
        <img
          src="https://threemovers.sfo2.cdn.digitaloceanspaces.com/media/cheap-tulsa-to-virginia-beach-moving-company.jpg?hash=19d8481a79d2f98d98a015c84f6c8eb1b1552d092733a7d075089437f300e246"
          alt="House Shifting Labour Services"
          className={styles.houseHelperFullImage}
        />
      </div>

      {/* Filter Box */}
      <div className={`${styles.houseHelperFilterSystem} container mt-4`}>
        <div className="row g-3">
          {/* Number of Labours */}
          <div className="col-md-3">
            <div className="p-2 h-100 bg-light rounded shadow-sm">
              <label className={`${styles.formLabel} fw-bold mb-2`}>Number of Labours</label>
              <input
                type="number"
                name="numberOfLabours"
                id="numberOfLabours"
                className={`${styles.formControl} form-control form-control-sm`}
                value={filters.numberOfLabours}
                onChange={handleFilterChange}
                min="1"
              />
            </div>
          </div>

          {/* Distance */}
          <div className="col-md-3">
            <div className="p-2 h-100 bg-light rounded shadow-sm">
              <label className={`${styles.formLabel} fw-bold mb-2`}>Distance (km)</label>
              <input
                type="number"
                name="distance"
                id="distance"
                className={`${styles.formControl} form-control form-control-sm`}
                value={filters.distance}
                onChange={handleFilterChange}
                min="0"
              />
            </div>
          </div>

          {/* Floor Details */}
          <div className="col-md-3">
            <div className="p-2 h-100 bg-light rounded shadow-sm">
              <label className={`${styles.formLabel} fw-bold mb-2`}>From Floor</label>
              <input
                type="number"
                name="fromFloor"
                id="fromFloor"
                className={`${styles.formControl} form-control form-control-sm`}
                value={filters.fromFloor}
                onChange={handleFilterChange}
                min="0"
              />
              <label className={`${styles.formLabel} fw-bold mb-2`}>To Floor</label>
              <input
                type="number"
                name="toFloor"
                id="toFloor"
                className={`${styles.formControl} form-control form-control-sm`}
                value={filters.toFloor}
                onChange={handleFilterChange}
                min="0"
              />
            </div>
          </div>

          {/* Price Display */}
          <div className="col-md-3">
            <div className="p-2 h-100 bg-light rounded shadow-sm d-flex flex-column justify-content-center align-items-center">
              <label className={`${styles.formLabel} fw-bold mb-2`}>Total Price</label>
              <div className={`${styles.formControl} form-control-sm text-center`} style={{ backgroundColor: '#fff3e6', padding: '8px', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold' }}>
                {calculatePrice()} TK
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Box */}
      <div className="container mt-4">
        <h2 className={styles.houseHelperH2}>Top Rated Labours</h2>
        <div className="row">
          {sortedLabours.slice(0, 3).map(labour => (
            <div key={labour.id} className="col-md-4 mb-4">
              <div className={`${styles.houseHelperCard} card shadow-sm`}>
                <img src={labour.image} alt={labour.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className={styles.houseHelperCardTitle}>{labour.name}</h5>
                  <p className={styles.houseHelperCardText}><strong>Age:</strong> {labour.age}</p>
                  <p className={styles.houseHelperCardText}><strong>Phone:</strong> {labour.phone}</p>
                  <p className={styles.houseHelperCardText}><strong>Rating:</strong> {labour.rating} ⭐</p>
                  <p className={styles.houseHelperCardText}><strong>Experience:</strong> {labour.experience}</p>
                  <p className={styles.houseHelperCardText}><strong>Skills:</strong> {labour.skills.join(', ')}</p>
                  <button
                    className="btn w-100 mt-3"
                    onClick={() => handleBookNow(labour.phone)}
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
      </div>

      {/* Labour List */}
      <div className="container mt-4">
        <h2 className={styles.houseHelperH2}>Available Labours</h2>
        <div className="row">
          {currentLabours.map(labour => (
            <div key={labour.id} className="col-md-3 mb-4">
              <div className={`${styles.houseHelperCard} card shadow-sm`}>
                <img src={labour.image} alt={labour.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className={styles.houseHelperCardTitle}>{labour.name}</h5>
                  <p className={styles.houseHelperCardText}><strong>Age:</strong> {labour.age}</p>
                  <p className={styles.houseHelperCardText}><strong>Phone:</strong> {labour.phone}</p>
                  <p className={styles.houseHelperCardText}><strong>Rating:</strong> {labour.rating} ⭐</p>
                  <p className={styles.houseHelperCardText}><strong>Experience:</strong> {labour.experience}</p>
                  <p className={styles.houseHelperCardText}><strong>Skills:</strong> {labour.skills.join(', ')}</p>
                  <p className={styles.houseHelperCardText}><strong>Price:</strong> {calculatePrice()} TK</p>
                  <button
                    className="btn w-100 mt-3"
                    onClick={() => handleBookNow(labour.phone)}
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

        {/* Pagination */}
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

export default Labour;