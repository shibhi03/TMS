// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  const navLink = [
    {text: "Home", url:"/"},
    {text: "Fleet Registration", url:'/fleet-registration'},
    {text: "Vehicle Status", url:'/vehicle-status'},
    {text: "Maintenance Scheduling", url: '/maintenance-scheduler'},
    {text: "Fuel Management", url: "/fuel-management"},
    {text: "Asset Lifespan", url: '/asset-lifespan'}
  ]

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Vehicle Management</h1>
      </div>

      <ul className="navbar-links">
        {navLink.map( data => (<li><Link to={data.url}>{data.text}</Link></li>))}
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/fleet-registration">Fleet Registration</Link></li>
        <li><Link to="/vehicle-status">Vehicle Status</Link></li>
        <li><Link to="/maintenance-scheduler">Maintenance Scheduling</Link></li>
        <li><Link to="/fuel-management">Fuel Management</Link></li>
        <li><Link to="/asset-lifespan">Asset Lifespan</Link></li> */}
      </ul>
    </div>
  );
};

export default NavBar;
