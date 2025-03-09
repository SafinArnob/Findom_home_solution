import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdmindashBoard";



function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;
