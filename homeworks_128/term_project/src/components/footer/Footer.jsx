import React from 'react';
import Logo from '../Logo';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-social-info">
          <Logo />
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="social-media">
            <img src="src/assets/images/icons/facebook.svg" alt="facebook" />
            <img src="src/assets/images/icons/twitter.svg" alt="twitter" />
            <img src="src/assets/images/icons/linkedin.svg" alt="linkedin" />
            <img src="src/assets/images/icons/instagram.svg" alt="instagram" />
          </div>
        </div>
        <div className="footer-nav-container">
          <h4>Pages</h4>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Our Projects</li>
              <li>Our Team</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </nav>
        </div>
        <div className="footer-nav-container">
          <h4>Services</h4>
          <nav>
            <ul>
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Dining Hall</li>
              <li>Bedroom</li>
            </ul>
          </nav>
        </div>
        <div className="footer-nav-container">
          <h4>Contact</h4>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
          <p>contact@selhono.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>
      <p className="copy">Copyright © SELHONO</p>
    </footer>
  );
};

export default Footer;
