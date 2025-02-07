const AdvancedFilters = () => {
  return (
    <div className="container p-5">
      <div className="advanced-filters">
      {/* First Row */}
      <div className="row">
        <div className="col-md-3 filter-item">
          <label htmlFor="bathrooms">Bathrooms</label>
          <select className="form-select" id="bathrooms">
            <option>Bathrooms</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-md-3 filter-item">
          <label htmlFor="bedrooms">Bedrooms</label>
          <select className="form-select" id="bedrooms">
            <option>Bedrooms</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-md-3 filter-item">
          <label htmlFor="states">States</label>
          <select className="form-select" id="states">
            <option>All States</option>
            <option>State 1</option>
            <option>State 2</option>
          </select>
        </div>
        <div className="col-md-3 filter-item">
          <label htmlFor="city">City</label>
          <select className="form-select" id="city">
            <option>All Cities</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-3">
        <div className="col-md-3 filter-item">
          <label htmlFor="garages">Garages</label>
          <select className="form-select" id="garages">
            <option>Any Garages</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-md-3 filter-item">
          <label htmlFor="rooms">Rooms</label>
          <select className="form-select" id="rooms">
            <option>Any Rooms</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-md-6 filter-item">
          <label>Other Features</label>
          <input type="text" className="form-control" placeholder="Enter features" />
        </div>
      </div>

      {/* Third Row */}
      <div className="row mt-3">
        <div className="col-md-6 filter-item">
          <label>Size Range: from 10 SqFt to 1,000 SqFt</label>
          <input type="range" className="form-range" min="10" max="1000" />
        </div>
        <div className="col-md-6 filter-item">
          <label>Price Range: from $200 to $2,500,000</label>
          <input type="range" className="form-range" min="200" max="2500000" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdvancedFilters;