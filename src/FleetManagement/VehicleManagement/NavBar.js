// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Vehicle Management</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fleet-registration">Fleet Registration</Link></li>
        <li><Link to="/vehicle-status">Vehicle Status</Link></li>
        <li><Link to="/maintenance-scheduler">Maintenance Scheduling</Link></li>
        <li><Link to="/fuel-management">Fuel Management</Link></li>
        <li><Link to="/asset-lifespan">Asset Lifespan</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
