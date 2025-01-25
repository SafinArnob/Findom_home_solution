import { useState } from "react";
import "../styles/Home.css";
import '../styles/rent_button.css';
import FilterBar from './../components/FilterBar';
import AdvancedFilters from "../components/AdvancedFilters";
import Navbar from "../components/Navbar";  // Import the Navbar component
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

      {/* Background Section with Text and Button */}
      <section className="background-image position-relative">
  <div className="overlay"></div>
  <div className="hero-content">
    <h1>Find a Home<br></br> You will Love</h1>
    <p>Discover a Place You ll Love to Live</p>
    <button className="explore-button">Explore Houses</button>
  </div>
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