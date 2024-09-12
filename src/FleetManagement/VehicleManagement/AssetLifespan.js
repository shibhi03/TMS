// src/components/AssetLifespan.js
import React, { useState } from 'react';
import './FormStyles.css';

const AssetLifespan = () => {
  const [asset, setAsset] = useState({
    licensePlate: '',
    depreciation: '',
    lifespanYears: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAsset({ ...asset, [name]: value });
  };

  const calculateDepreciation = (e) => {
    e.preventDefault();
    // Logic to calculate depreciation and lifecycle (this can be expanded)
    console.log('Asset lifecycle and depreciation tracked for:', asset);
  };

  return (
    <form onSubmit={calculateDepreciation}>
      <h3>Asset Lifespan Tracking</h3>
      <label>License Plate: </label>
      <input name="licensePlate" value={asset.licensePlate} onChange={handleChange} /><br />
      <label>Depreciation (%): </label>
      <input name="depreciation" value={asset.depreciation} onChange={handleChange} /><br />
      <label>Lifespan (Years): </label>
      <input name="lifespanYears" value={asset.lifespanYears} onChange={handleChange} /><br />
      <button type="submit">Track Asset</button>
    </form>
  );
};

export default AssetLifespan;
