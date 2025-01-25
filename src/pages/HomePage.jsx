import { useState } from "react";
import "../styles/Home.css";
import '../styles/rent_button.css';
import '../styles/PropertySlider.css';
import FilterBar from './../components/FilterBar';
import AdvancedFilters from "../components/AdvancedFilters";
import Navbar from "../components/navbar";  // Import the Navbar component
import Rent from './Rent';
import FooterPage from './FooterPage';
import PropertySlider from "./Property";



function Home() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <section className="background-image position-relative">
        <div className="overlay"></div>
      </section>

      {/* Filter Box Section */}
      <section className="filter-box-wrapper position-relative py-4">
        <div className="container">
          <FilterBar toggleAdvanced={toggleAdvanced} />
        </div>

        {/* Advanced and Search */}
        {showAdvancedFilters && (
          <section className="advanced-filters-section py-4">
            <div className="container">
              <AdvancedFilters isVisible={showAdvancedFilters} />
            </div>
          </section>
        )}

        {/* Rent and Sell Section */}
        <section className="rent-sell-section">
          <Rent /> {/* Render the Rent component here */}
        </section>

        {/* Property */}
        <PropertySlider />

        {/* Footer page */}
        <FooterPage />
      </section>
    </>
  );
}

export default Home;
