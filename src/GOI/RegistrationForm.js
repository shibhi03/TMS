import React, { useState } from 'react';
// import axios from 'axios';
import './FormStyles.css';

const VehicleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    registerNumber: '',
    dateOfRegistration: '',
    registrationValidity: '',
    chassisNumber: generateChassisNumber(),
    engineNumber: '',
    ownerName: '',
    address: '',
    vehicleType: 'Truck',
    fuelType: '',
    color: '',
    make: ''
  });

  function generateChassisNumber() {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post('/api/registerVehicle', formData);
    //   alert('Vehicle Registered Successfully');
    // } catch (error) {
    //   console.error(error);
    //   alert('Error in registration');
    // }
  };

  return (
    <form className="vehicle-form" onSubmit={handleSubmit}>
      <h2>Vehicle Registration Form</h2>

      <label>Register Number</label>
      <input type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} required />

      <label>Date of Registration</label>
      <input type="date" name="dateOfRegistration" value={formData.dateOfRegistration} onChange={handleChange} required />

      <label>Registration Validity</label>
      <input type="date" name="registrationValidity" value={formData.registrationValidity} onChange={handleChange} required />

      <label>Chassis Number</label>
      <input type="text" name="chassisNumber" value={formData.chassisNumber} readOnly />

      <label>Engine/Motor Number</label>
      <input type="text" name="engineNumber" value={formData.engineNumber} onChange={handleChange} required />

      <label>Owner Name</label>
      <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />

      <label>Address</label>
      <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

      <label>Vehicle Type</label>
      <input type="text" name="vehicleType" value={formData.vehicleType} readOnly />

      <label>Fuel Type</label>
      <input type="text" name="fuelType" value={formData.fuelType} onChange={handleChange} required />

      <label>Color</label>
      <input type="text" name="color" value={formData.color} onChange={handleChange} required />

      <label>Make</label>
      <input type="text" name="make" value={formData.make} onChange={handleChange} required />

      <button type="submit">Register Vehicle</button>
    </form>
  );
};

export default VehicleRegistrationForm;
