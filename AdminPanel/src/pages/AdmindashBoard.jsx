import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminDashboard.css";
import SideNav from "../components/SideNav";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardHome = () => {
  const [sidenavOpen, setSidenavOpen] = useState(true);

  // Ensure sidebar width updates correctly
  useEffect(() => {
    const handleResize = () => {
      setSidenavOpen(window.innerWidth > 992);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  const propertyData = [
    { name: "Bachelor", value: 35 },
    { name: "Sublet", value: 25 },
    { name: "Family House", value: 40 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 19000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 21000 },
    { month: "May", revenue: 25000 },
    { month: "Jun", revenue: 22000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div
      className={`dashboard-layout ${
        sidenavOpen ? "sidenav-open" : "sidenav-closed"
      }`}
    >
      <SideNav isOpen={sidenavOpen} onClose={toggleSidenav} />
      <div className="main-content">
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={toggleSidenav}>
            <i className="bi bi-list"></i>
          </button>
          <div className="user-section">
            <div className="notification-icon">
              <i className="bi bi-bell"></i>
            </div>
            <div className="user-profile">
              <div className="user-avatar">
                <img src="https://via.placeholder.com/36" alt="User" />
              </div>
              <span className="user-name">Admin User</span>
            </div>
          </div>
        </header>

        <div className="dashboard-container">
          <div className="row">
            {[
              {
                label: "Total Properties",
                value: "1,234",
                icon: "bi-house-door",
                link: "/properties",
              },
              {
                label: "Active Tenants",
                value: "892",
                icon: "bi-people",
                link: "/users",
              },
              {
                label: "Transport Requests",
                value: "45",
                icon: "bi-truck",
                link: "/transportation",
              },
              {
                label: "Maintenance",
                value: "28",
                icon: "bi-wrench",
                link: "/maintenance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
              >
                <Link to={item.link} className="dashboard-card">
                  <div className="d-flex align-items-center">
                    <div className={`icon-container icon-${index}`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="ms-3">
                      <p className="card-label">{item.label}</p>
                      <h2 className="card-value">{item.value}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <div className="dashboard-card chart-card">
                <h3 className="chart-title">Property Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={propertyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {propertyData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-4">
              <div className="dashboard-card chart-card">
                <h3 className="chart-title">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#0088FE"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
