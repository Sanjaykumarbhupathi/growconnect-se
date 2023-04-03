import React, { useState } from "react";
import india from "./India";
import Navbar1 from '../navbars/navbar1'
import Navbar2 from '../navbars/navbar2'
import './Addproducts.css'
const Addproducts = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleProductUpload = (event) => {
    event.preventDefault();
    // logic to upload the product information to the portal
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <><Navbar1 />
    <Navbar2/>
    <div className="add-products-container1">
        <form className="add-products-form1" onSubmit={handleProductUpload}>
          <label>
            Product Name:
            <input
              className="add-products-input"
              type="text"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Quantity:
            <input
              className="add-products-input"
              type="text"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </label>
          <br />
          <label>
            Expiry Date:
            <input
              className="add-products-input"
              type="date"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
            />
          </label>
          <br />
          <label>
            Image:
            <input
              className="add-products-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <br />
          <label>
            State:
            <select
              className="add-products-input"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select State</option>
              {Object.keys(india).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            District:
            <select
              className="add-products-input"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="">Select District</option>
              {selectedState &&
                india[selectedState].map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
            </select>
          </label>
          <br />
          <button className="add-products-submit-button" type="submit">
            Upload Product
          </button>
        </form>
      </div></>
  )
}

export default Addproducts