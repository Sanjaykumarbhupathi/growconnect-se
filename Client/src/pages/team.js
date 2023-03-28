import React from 'react';
import './Team.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';


const Teams = () => {
  return (
    <><Navbar/>
    <div className='team'><div className="team-page">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="ceo-section">
          <h3>Web-Developer</h3>
          <img class="devlopers" src='/eshwar1.jpg' alt='eshwar' style={{ height: '180px', width: '180px' }} /> {/* Add the logo */}
          <p>B.Tech Computer Science Student at JK Lakshmipat University - jaipur</p><br />
        </div>
        <div className="marketing-section">
          <h3>Web Developer</h3>
          <img class="devlopers" src='/sanjay.png' alt='sanjay' style={{ height: '180px', width: '180px' }} /> {/* Add the logo */}
          <p>B.Tech Computer Science Student at JK Lakshmipat University - jaipur</p><br />
        </div>
      </div>
    </div></div><Footer/></>
  );
};

export default Teams;
