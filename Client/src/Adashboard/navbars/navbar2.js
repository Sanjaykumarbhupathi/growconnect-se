import React from 'react'
import './navbar2.css';

function Navbar2() {
    return (
        <nav className="navbar2">
      <div className="navbar-menu2">
        <ul className="navbar-end2">
          <li><a href="./AddFarmers">Add Farmers</a></li>
          <li><a href="./deleteFarmers">Delete Farmers</a></li>
          <li><a href="./deletecustomers">Delete Customers</a></li>
          <li><a href="./deletesuppliers">Delete Suppliers</a></li>
          <li><a href="./TTransactions">Total Transactions</a></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar2;