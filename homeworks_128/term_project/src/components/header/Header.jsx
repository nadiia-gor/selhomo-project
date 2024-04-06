import HamburgerMenu from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <div className="header--container">
        <Logo />
        <div className={`header--nav-items ${isOpen ? 'open' : ''}`}>
          <nav className={`header--nav ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>
          <img src="src/assets/images/search-icon.svg" alt="search-icon" />
        </div>
        <div className="burger-menu">
          <HamburgerMenu
            toggled={isOpen}
            toggle={handleMenuClick}
            direction="left"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
