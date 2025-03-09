import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdmindashBoard";
import Properties from "../pages/Properties";



function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/" element={<Properties />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;
