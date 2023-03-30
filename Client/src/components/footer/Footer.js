import React from 'react';
import "./Footer.css";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"></link>

function Footer() {
    return (
        <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/*  FOOTER START */}
  <div className="footer">
    <div className="inner-footer">
      {/*  for company name and description */}
      <div className="footer-items">
        <div className='footer_logo'>
        <img src='./logo.png' alt='logo' style={{marginLeft:10}}/>
        </div>
        <br/>
        <p>we connect you with healthiness</p>
      </div>
      {/*  for quick links  */}
      <div className="footer-items">
        <h3>Quick Links</h3>
        <div className="border1" /> {/*for the underline */}
        <ul>
          <a href="/Home">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>Team</li>
          </a>
        </ul>
      </div>
      {/*  for some other links */}
      <div className="footer-items">
        <h3>Services</h3>
        <div className="border1" /> {/*for the underline */}
        <ul>
          <a href="#">
            <li>products</li>
          </a>
          <a href="#">
            <li>pesticides</li>
          </a>
        </ul>
      </div>
      
      {/*  for contact us info */}
      <div className="footer-items">
        <h3>Contact us</h3>
        <div className="border1" />
        <ul>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true" />
            XYZ, abc
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true" />
            123456789
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true" />
            xyz@gmail.com
          </li>
        </ul>
        {/*   for social links */}
        <div className="social-media">
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-facebook" />
          </a>
          <a href="#">
            <i className="fab fa-google-plus-square" />
          </a>
        </div>
      </div>
    </div>
    {/*   Footer Bottom start  */}
    <div className="footer-bottom">Copyright © GrowConnect 2023.</div>
  </div>
</>



    );
}

export default Footer;
