import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import AllHouses from '../pages/ALLHouses';
import Bachelor from '../pages/Bachelor';
import PropertyDetails from '../pages/PropertyDetails';
import FAQPage from '../pages/FAQ';

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-houses" element={<AllHouses />} />
        <Route path="/bachelor" element={<Bachelor />} />
        <Route path="/property/:id" element={<PropertyDetails />} /> {/* Property Details Page */}
        <Route path="/faq"  element={<FAQPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouters;
