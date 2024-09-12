// src/components/FuelManagement.js
import React, { useState } from 'react';
import './FormStyles.css';

const FuelManagement = () => {
  const [fuelData, setFuelData] = useState({
    licensePlate: '',
    fuelUsage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuelData({ ...fuelData, [name]: value });
  };

  const saveFuelData = (e) => {
    e.preventDefault();
    // Logic to save fuel usage data
    console.log('Fuel data saved:', fuelData);
  };

  return (
    <form onSubmit={saveFuelData}>
      <h3>Fuel Management</h3>
      <label>License Plate: </label>
      <input name="licensePlate" value={fuelData.licensePlate} onChange={handleChange} /><br />
      <label>Fuel Usage (Litres): </label>
      <input name="fuelUsage" value={fuelData.fuelUsage} onChange={handleChange} /><br />
      <button type="submit">Save Fuel Data</button>
    </form>
  );
};

export default FuelManagement;
