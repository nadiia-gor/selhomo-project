import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import './Header.scss';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 63%;
  margin: 54px auto 0px auto;
`;

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <div className="header--nav-items">
          <nav>
            <ul style={{ display: 'flex', gap: '30px' }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
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
            </ul>
          </nav>
          <img src="src/assets/images/search-icon.svg" alt="search-icon" />
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
