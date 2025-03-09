import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdmindashBoard";
import Properties from "../pages/Properties";
import AddTransportation from "../pages/AddTransportation"; // Import the new component

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/transportation" element={<AddTransportation />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default AppRouters;