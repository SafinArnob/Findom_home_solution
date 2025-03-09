import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideNav.css";

const SideNav = ({ isOpen, onClose }) => {
  return (
    <div className={`sidenav ${isOpen ? "open" : ""}`}>
      <div className="sidenav-header">
        <h2 className="sidenav-title">FindHome Admin</h2>
        <button className="sidenav-toggle d-lg-none" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
      </div>

      <ul className="sidenav-menu">
        <li className="sidenav-item active">
          <Link to="/" className="sidenav-link">
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidenav-item">
          <Link to="/properties" className="sidenav-link">
            <i className="bi bi-building"></i>
            <span>Properties</span>
          </Link>
        </li>
        <li className="sidenav-item">
          <Link to="/users" className="sidenav-link">
            <i className="bi bi-people"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="sidenav-item">
          <Link to="/transportation" className="sidenav-link">
            <i className="bi bi-truck"></i>
            <span>Transportation</span>
          </Link>
        </li>
        <li className="sidenav-item">
          <Link to="/helpers" className="sidenav-link">
            <i className="bi bi-person-plus"></i>
            <span>Helpers</span>
          </Link>
        </li>
        <li className="sidenav-item">
          <Link to="/maintenance" className="sidenav-link">
            <i className="bi bi-wrench"></i>
            <span>Maintenance</span>
          </Link>
        </li>
        <li className="sidenav-item logout-item">
          <Link to="/logout" className="sidenav-link">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
