import React, { useState } from 'react';
import './FormStyles.css';

function RegistrationForm() {
  const [vehicle, setVehicle] = useState({
    licensePlate: '',
    make: '',
    model: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Fleet Registration</h3>
      <label>License Plate:</label>
      <input
        type="text"
        name="licensePlate"
        value={vehicle.licensePlate}
        onChange={handleChange}
        required
      />
      
      <label>Make:</label>
      <input
        type="text"
        name="make"
        value={vehicle.make}
        onChange={handleChange}
        required
      />
      
      <label>Model:</label>
      <input
        type="text"
        name="model"
        value={vehicle.model}
        onChange={handleChange}
        required
      />
      
      <label>Year:</label>
      <input
        type="number"
        name="year"
        value={vehicle.year}
        onChange={handleChange}
        required
      />
      
      <button type="submit">Register Vehicle</button>
    </form>
  );
};

export default RegistrationForm;
