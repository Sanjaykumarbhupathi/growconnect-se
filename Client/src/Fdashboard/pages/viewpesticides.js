import React, { useState } from 'react';
import india from './India'; // Import the india.js file
import Navbar1 from '../navbars/navbar1';
import Navbar2 from '../navbars/navbar2';
import './viewpesticides.css';

function Viewpesticides(product) {
  const [cart, setCart] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filterVisible, setFilterVisible] = useState(false); // New state variable for filter visibility

  const addToCart = () => {
    setCart([...cart, product]);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected state: ${selectedState}, Selected district: ${selectedDistrict}`);
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible); // Toggle the visibility of the filter form
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="filter-form">
        <button className="filter-btn" onClick={toggleFilter}>
          Filter
        </button>
        {filterVisible && ( // Only show the filter form if filterVisible is true
          <form onSubmit={handleSubmit}>
            <div className="form-group1">
              <label htmlFor="state-select">State:</label>
              <select id="state-select" value={selectedState} onChange={handleStateChange}>
                <option value="">--Select State--</option>
                {Object.keys(india).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group1">
              <label htmlFor="district-select">District:</label>
              <select id="district-select" value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">--Select District--</option>
                {selectedState &&
                  india[selectedState].map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </div>
            <button type="submit" className="apply-btn">
              Apply
            </button>
          </form>
        )}
      </div>
      <div className="product-row"></div>
      <div className="product-card">
        <img className="product-image" src={product.image} alt="Product Image" />
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className="product-price">{product.price}</span>
        </div>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Viewpesticides;
