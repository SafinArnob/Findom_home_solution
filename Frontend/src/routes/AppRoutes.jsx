import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import AllHouses from '../pages/ALLHouses';
import Bachelor from '../pages/Bachelor';
import PropertyDetails from '../pages/PropertyDetails';
import FAQPage from '../pages/FAQ';
import Transportation from '../pages/transportation';
import HouseHelper from '../pages/HouseHelper';
import Family from '../pages/family-house';
import Sublate from '../pages/Sublate';
import Labour from '../pages/Labour';
import Maintenance from '../pages/Maintenance';
import AboutUss from '../pages/AboutUss'; 
import UserProfile from '../pages/UserProfile'; // Import the UserProfile component
import UploadDetails from './../pages/UploadDetails';

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-houses" element={<AllHouses />} />
        <Route path="/bachelor" element={<Bachelor />} />
        <Route path="/family-house" element={<Family />} />
        <Route path="/Sublate" element={<Sublate />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/house-helper" element={<HouseHelper />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/about-us" element={<AboutUss />} />
        <Route path="/profile" element={<UserProfile />} />{" "}
        {/* ✅ User Profile Route */}
        <Route path="/upload-details" element={<UploadDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;
