import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';
import '../styles/bachelorPage.css';
import Navbar from '../components/Navbar';

const RealEstatePage = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const toggleAdvanced = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };
  const [filters, setFilters] = useState({
    bedrooms: '',
    neighborhoods: '',
    priceRange: [200, 2500000],
    landAreaRange: [10, 1000],
    otherFeatures: '',
    states: '',
    cities: '',
  });

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [sortOption, setSortOption] = useState('default'); // Sorting option state
  const listingsPerPage = 6; // Number of listings per page

  const listings = [
    {
      id: 1,
      title: 'Bachelor',
      location: '2150 Baseline St, Utica',
      price: 550,
      bedrooms: 3,
      bathrooms: 2,
      area: 900,
      neighborhood: 'Downtown',
      state: 'California',
      city: 'Los Angeles',
      image: '/src/assets/images/house-1.jpg',
    },
    {
      id: 2,
      title: 'Bachelor',
      location: '283 Foxhall Ave, Kingston',
      price: 550,
      bedrooms: 3,
      bathrooms: 2,
      area: 900,
      neighborhood: 'Suburb',
      state: 'Texas',
      city: 'Houston',
      image: '../assets/images/house-1.jpg',
    },
    {
      id: 3,
      title: 'Bachelor',
      location: '905 S Commerce St, Alice',
      price: 550,
      bedrooms: 3,
      bathrooms: 2,
      area: 900,
      neighborhood: 'Rural',
      state: 'New York',
      city: 'New York City',
      image: '/api/placeholder/400/300',
    },
    {
      id: 4,
      title: 'Bachelor',
      location: '123 Main St, San Francisco',
      price: 1200,
      bedrooms: 2,
      bathrooms: 1,
      area: 800,
      neighborhood: 'Downtown',
      state: 'California',
      city: 'San Francisco',
      image: '/api/placeholder/400/300',
    },
    {
      id: 5,
      title: 'Bachelor',
      location: '456 Elm St, Austin',
      price: 850,
      bedrooms: 2,
      bathrooms: 1,
      area: 700,
      neighborhood: 'Suburb',
      state: 'Texas',
      city: 'Austin',
      image: '/api/placeholder/400/300',
    },
    {
      id: 6,
      title: 'Bachelor',
      location: '789 Oak St, Chicago',
      price: 950,
      bedrooms: 4,
      bathrooms: 3,
      area: 1500,
      neighborhood: 'Rural',
      state: 'Illinois',
      city: 'Chicago',
      image: '/api/placeholder/400/300',
    },
    {
      id: 7,
      title: 'Bachelor',
      location: '101 Beach Ave, Miami',
      price: 2000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      neighborhood: 'Downtown',
      state: 'Florida',
      city: 'Miami',
      image: '/api/placeholder/400/300',
    },
    {
      id: 8,
      title: 'Bachelor',
      location: '202 Mountain Rd, Denver',
      price: 750,
      bedrooms: 2,
      bathrooms: 1,
      area: 600,
      neighborhood: 'Rural',
      state: 'Colorado',
      city: 'Denver',
      image: '/api/placeholder/400/300',
    },
    {
      id: 9,
      title: 'Bachelor',
      location: '303 Pine St, Seattle',
      price: 1100,
      bedrooms: 1,
      bathrooms: 1,
      area: 500,
      neighborhood: 'Downtown',
      state: 'Washington',
      city: 'Seattle',
      image: '/api/placeholder/400/300',
    },
    {
      id: 10,
      title: 'Bachelor',
      location: '404 Ocean Dr, San Diego',
      price: 1800,
      bedrooms: 4,
      bathrooms: 3,
      area: 1600,
      neighborhood: 'Suburb',
      state: 'California',
      city: 'San Diego',
      image: '/api/placeholder/400/300',
    },
  ];

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to the first page when filters change
  };

  // Filter the listings based on the selected filters
  const filteredListings = listings.filter((listing) => {
    return (
      (filters.bedrooms === '' || listing.bedrooms === parseInt(filters.bedrooms)) &&
      (filters.neighborhoods === '' || listing.neighborhood === filters.neighborhoods) &&
      (filters.states === '' || listing.state === filters.states) &&
      (filters.cities === '' || listing.city === filters.cities) &&
      listing.price >= filters.priceRange[0] &&
      listing.price <= filters.priceRange[1] &&
      listing.area >= filters.landAreaRange[0] &&
      listing.area <= filters.landAreaRange[1]
    );
  });

  // Sort the listings based on the selected sorting option
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price; // Sort by price (low to high)
    } else if (sortOption === 'highToLow') {
      return b.price - a.price; // Sort by price (high to low)
    } else {
      return 0; // Default sorting (no change)
    }
  });

  // Pagination logic
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = sortedListings.slice(indexOfFirstListing, indexOfLastListing);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />

      {/* Background Section with Text and Button */}
      <section className="background-image-bachelor position-relative">
        <div className="overlay"></div>
        <div className="hero-content">
          {/* Add hero content here if needed */}
        </div>
      </section>

      {/* Filter Box Section */}
      <section className="filter-box-wrapper position-relative py-4">
        <div className="container">
          <FilterBar
            toggleAdvanced={toggleAdvanced}
            showAdvanced={showAdvancedFilters}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </section>

      {/* Listings Section */}
      <main className="container">
        <div className="listings-header">
          <p>Showing {filteredListings.length} results</p>
          <select
            className="btn btn-secondary sorting-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="listings-grid">
          {currentListings.map((listing) => (
            <PropertyCard key={listing.id} property={listing} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            className="btn btn-secondary"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-3">
            Page {currentPage} of {Math.ceil(filteredListings.length / listingsPerPage)}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredListings.length / listingsPerPage)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default RealEstatePage;