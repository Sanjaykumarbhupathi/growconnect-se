import React from 'react';
import './Home.css';
import myVideo from './icons/page3.mp4';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

function Home() {
  
  return (
    <>
    <Navbar/><div className='home'> 
    <div className="video-container">
      <video autoPlay loop muted id='videobcg'>
        <source src={myVideo} type="video/mp4"/>
      </video>
      <div className="text-overlay">
        <h1 className='brand'>Grow Connect</h1>
        <p className='caption'>we connect you with healthiness</p>
      </div>
      <div>
        <h2 className='newsfeed'>Top News Feed</h2>
        
      </div>
      <div>
      </div>
    </div>
    
    </div><Footer/>
    </>
  );
}

export default Home;
