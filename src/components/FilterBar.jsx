import PropTypes from 'prop-types';
import { useState } from 'react';
import AdvancedFilters from './AdvancedFilters';
import '../styles/AdvancedFilters.css'; // Import the CSS file for styling

const FilterBar = ({ toggleAdvanced, showAdvanced }) => {
  const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  // Function to handle search
  const handleSearch = () => {
    console.log('Search Query:', searchQuery); // Replace with your search logic
    alert(`You searched for: ${searchQuery}`); // Example action
  };

  return (
    <div className="filter-box-wrapper">
      <div className="container">
        {/* Main Filter Box */}
        <div className="filter-box bg-white shadow rounded p-4">
          {/* Main Filters */}
          <div className="d-flex align-items-center gap-3 justify-content mx-auto flex-wrap">
            {/* Status Dropdown */}
            <div className="filter-item flex-grow-1">
              <label className="d-block text-muted mb-1">Status</label>
              <select className="form-select border-0 bg-light">
                <option>All Status</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>

            {/* Label Dropdown */}
            <div className="filter-item flex-grow-1">
              <label className="d-block text-muted mb-1">Label</label>
              <select className="form-select border-0 bg-light">
                <option>All Labels</option>
                <option>Luxury</option>
                <option>Economy</option>
              </select>
            </div>

            {/* Type Dropdown */}
            <div className="filter-item flex-grow-1">
              <label className="d-block text-muted mb-1">Type</label>
              <select className="form-select border-0 bg-light">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            {/* Advanced Toggle */}
            <div
              className="filter-item d-flex align-items-center justify-content-center cursor-pointer"
              onClick={toggleAdvanced}
            >
              <i className={`bi ${showAdvanced ? 'bi-dash-circle' : 'bi-plus-circle'} me-2 text-dark`}></i>
              <span className="fw-bold">{showAdvanced ? 'Hide Advanced' : 'Advanced'}</span>
            </div>

            {/* Search Button */}
            <div className="filter-item position-relative">
              <button
                className="btn btn-warning px-4 fw-bold"
                onClick={() => setShowSearchBar(!showSearchBar)} // Toggle search bar visibility
              >
                Search
              </button>

              {/* Search Bar */}
              <div
                className={`search-bar-container ${showSearchBar ? 'visible' : ''}`}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your search query..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                  />
                  <button
                    className="btn btn-warning"
                    onClick={handleSearch} // Trigger search
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Filters Box */}
        <div className={`advanced-filters-box ${showAdvanced ? 'visible' : ''}`}>
          <AdvancedFilters />
        </div>
      </div>
    </div>
  );
};

// Define PropTypes
FilterBar.propTypes = {
  toggleAdvanced: PropTypes.func.isRequired, // Function to toggle advanced filters
  showAdvanced: PropTypes.bool.isRequired, // Boolean to track visibility of advanced filters
};

export default FilterBar;