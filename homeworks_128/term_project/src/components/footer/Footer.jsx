import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer--container">
        <div className="footer--logo-social-info">
          <Link to="/">
            <Logo />
          </Link>
          <p className="footer--logo-desc">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="footer--social-media">
            <a href="https://facebook.com">
              <img src="src/assets/images/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="https://twitter.com">
              <img src="src/assets/images/icons/twitter.svg" alt="twitter" />
            </a>
            <a href="https://linkedin.com">
              <img src="src/assets/images/icons/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://instagram.com">
              <img
                src="src/assets/images/icons/instagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="footer--nav-container">
          <h4>Pages</h4>
          <nav>
            <ul>
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <li>About Us</li>
              </Link>
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <li>Our Projects</li>
              </Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <li>Our Team</li>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <li>Contact Us</li>
              </Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <li>Services</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="footer--nav-container">
          <h4>Services</h4>
          <nav>
            <ul>
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <li>Bedroom</li>
              </Link>
              <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
                <li>Pricing</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="footer--nav-container">
          <h4>Contact</h4>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
          <p>contact@selhono.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>
      <p className="footer--copy">Copyright © SELHONO</p>
    </footer>
  );
};

export default Footer;
