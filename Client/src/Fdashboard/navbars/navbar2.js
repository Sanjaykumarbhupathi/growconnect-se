import React from 'react'
import './navbar2.css';

function Navbar2() {
    return (
        <nav className="navbar2">
      <div className="navbar-menu2">
        <ul className="navbar-end2">
          <li><a href="./viewpesticides">View Pesticides</a></li>
          <li><a href="./viewproducts">View Products</a></li>
          <li><a href="./AddProducts">Add products</a></li>
          <li><a href="./FTransactions">FTransactions</a></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar2;