// src/components/VehicleStatus.js
import React from 'react';
import './FormStyles.css';
import { useState } from 'react';

const VehicleStatus = () => {
  const [status, setStatus] = useState({
    licensePlate: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus({ ...status, [name]: value });
  };

  const updateStatus = (e) => {
    e.preventDefault();
    // Logic to update the vehicle's status in the system
    console.log('Vehicle status updated:', status);
  };

  return (
    <form onSubmit={updateStatus}>
      <h3>Vehicle Status Tracking</h3>
      <label>License Plate: </label>
      <input name="licensePlate" value={status.licensePlate} onChange={handleChange} /><br />
      <label>Status: </label>
      <select name="status" value={status.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="in_service">In Service</option>
        <option value="under_maintenance">Under Maintenance</option>
        <option value="out_of_commission">Out of Commission</option>
      </select><br />
      <button type="submit">Update Status</button>
    </form>
  );
};

export default VehicleStatus;
