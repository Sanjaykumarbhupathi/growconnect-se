import React from 'react'
import './navbar2.css';

function Navbar2() {
    return (
        <nav className="navbar2">
      <div className="navbar-menu2">
        <ul className="navbar-end2">
          <li><a href="#">Add Farmers</a></li>
          <li><a href="#">Delete Farmers</a></li>
          <li><a href="#">Delete Customers</a></li>
          <li><a href="#">Delete Sellers</a></li>
          <li><a href="#">Total Transactions</a></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar2;