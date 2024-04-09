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
        <Link to="/">
          <Logo />
        </Link>
        <div
          className={`header--nav-items ${isOpen ? 'open' : ''}`}
          onClick={() => setOpen(false)}
        >
          <nav className={`header--nav ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
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
