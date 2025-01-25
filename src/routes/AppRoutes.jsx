import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from './../pages/LoginPage';
import Register from './../pages/RegisterPage';

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/register" element={<Register />} /> {/* Register Page */}
      </Routes>
    </Router>
  );
}

export default AppRouters;