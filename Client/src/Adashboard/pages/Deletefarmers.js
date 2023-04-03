import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from '../navbars/navbar1'
import Navbar2 from '../navbars/navbar2'

function Deletefarmers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get("/api/users").then((res) => setUsers(res.data));
    }, []);
    return (
        <><Navbar1 /><Navbar2 />
         <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
    )
}

export default Deletefarmers