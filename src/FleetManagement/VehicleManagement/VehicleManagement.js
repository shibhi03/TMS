// // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import '../../global-variable.css';
import FleetRegistration from './FleetRegistration';
import VehicleStatus from './VehicleStatus';
import MaintenanceScheduler from './MaintenanceScheduler';
import FuelManagement from './FuelManagement';
import AssetLifespan from './AssetLifespan';
import './VehicleManagement.css';

function App() {
  return (
    <div className='grid'>
      <Router>
        <div className='head g-col-12'>
          <NavBar />
        </div>
        <div className="container g-col-12">
          <Routes>
            <Route path="/" element={<h2>Welcome to Vehicle Management System</h2>} />
            <Route path="/fleet-registration" element={<FleetRegistration />} />
            <Route path="/vehicle-status" element={<VehicleStatus />} />
            <Route path="/maintenance-scheduler" element={<MaintenanceScheduler />} />
            <Route path="/fuel-management" element={<FuelManagement />} />
            <Route path="/asset-lifespan" element={<AssetLifespan />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
