// src/components/MaintenanceScheduler.js
import React, { useState } from 'react';
import './FormStyles.css';

const MaintenanceScheduler = () => {
  const [maintenance, setMaintenance] = useState({
    licensePlate: '',
    nextServiceDate: '',
    mileage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaintenance({ ...maintenance, [name]: value });
  };

  const scheduleMaintenance = (e) => {
    e.preventDefault();
    // Logic to save maintenance schedule (e.g., send to a backend API)
    console.log('Maintenance scheduled for:', maintenance);
  };

  return (
    <form onSubmit={scheduleMaintenance}>
      <h3>Maintenance Scheduling</h3>
      <label>License Plate: </label>
      <input name="licensePlate" value={maintenance.licensePlate} onChange={handleChange} /><br />
      <label>Next Service Date: </label>
      <input type="date" name="nextServiceDate" value={maintenance.nextServiceDate} onChange={handleChange} /><br />
      <label>Mileage: </label>
      <input name="mileage" value={maintenance.mileage} onChange={handleChange} /><br />
      <button type="submit">Schedule Maintenance</button>
    </form>
  );
};

export default MaintenanceScheduler;
