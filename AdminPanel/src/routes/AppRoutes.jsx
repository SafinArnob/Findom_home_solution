import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdmindashBoard";
import Properties from "../pages/Properties";
import AddTransportation from "../pages/AddTransportation";
import AddLabour from "../pages/AddLabour"; // Import the AddLabour component

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/transportation" element={<AddTransportation />} />
        <Route path="/maintenance" element={<AddLabour />} /> {/* Add this route for AddLabour */}
      </Routes>
    </Router>
  );
}

export default AppRouters;