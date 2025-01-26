import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; // Ensure this path is correct
import Login from '../pages/LoginPage'; // Ensure this path is correct
import Register from '../pages/RegisterPage'; // Ensure this path is correct
import AllHouses from '../pages/ALLHouses'; // Ensure this path is correct
import Bachelor from '../pages/Bachelor'; // Import the Bachelor component

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/register" element={<Register />} /> {/* Register Page */}
        <Route path="/all-houses" element={<AllHouses />} /> {/* All Houses Page */}
        <Route path="/bachelor" element={<Bachelor />} /> {/* Bachelor Page */}
      </Routes>
    </Router>
  );
}

export default AppRouters;