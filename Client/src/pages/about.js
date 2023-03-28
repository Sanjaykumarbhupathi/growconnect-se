import React from 'react';
import './about.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='aboutpage'><div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">Welcome to Farmer to Consumer Connect! We are a platform that connects farmers directly with consumers, ensuring the freshest produce at fair prices. We also connect farmers with pesticide suppliers, enabling them to get the best quality products to protect their crops.</p>
      <p className="about-us-description">Our mission is to create a sustainable and transparent food system where consumers know exactly where their food comes from and farmers get the support they need to grow their business.</p>
      <p className="about-us-description">Our team is made up of experts in agriculture, technology, and customer service, who work tirelessly to provide the best experience for both farmers and consumers.</p>
      <p className="about-us-description">For farmers, we offer a user-friendly platform to showcase their products, communicate with consumers, and access high-quality pesticides from reputable suppliers. Our platform also allows farmers to track their sales, manage inventory, and get valuable insights into their business.</p>
      <p className="about-us-description">For consumers, we provide an easy-to-use platform to buy fresh produce directly from the source. Our products are guaranteed to be of the highest quality and at fair prices. We also offer a personalized experience where consumers can interact with farmers, learn about their farming practices, and ask any questions they may have.</p>
      <p className="about-us-description">For pesticide suppliers, we provide a reliable platform to connect with farmers who need their products. Our suppliers are carefully selected based on their reputation and quality of products, ensuring that farmers get the best quality pesticides to protect their crops.</p>
      <p className="about-us-description">At Farmer to Consumer Connect, we believe in creating a sustainable and transparent food system that benefits everyone involved. Join us in this mission and support local farmers while enjoying the freshest produce.</p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
