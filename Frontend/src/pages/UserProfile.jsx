import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './../components/Navbar';
import Footer from './Footer';

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if no user is found
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    localStorage.removeItem("token"); // Remove auth token
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
    <Navbar />
    <div className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#FFF7E6" }}>
      <div className="card p-4 text-center shadow-lg" style={{ width: "400px", borderRadius: "20px", backgroundColor: "#FFE8CC" }}>
        <h2 style={{ color: "#FF7A00", fontWeight: "bold" }}>User Profile</h2>
        <div className="mt-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button className="btn mt-3" onClick={handleLogout}
          style={{ backgroundColor: "#FF7A00", color: "white", fontWeight: "bold", borderRadius: "10px" }}>
          Logout
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserProfile;
