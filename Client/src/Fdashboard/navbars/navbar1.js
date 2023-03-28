import React from 'react';
import './navbar1.css';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

function Navbar1() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item">Farmer Dashboard</span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            <FaShoppingCart />
          </a>
          <a className="navbar-item">
            <FaSignOutAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
