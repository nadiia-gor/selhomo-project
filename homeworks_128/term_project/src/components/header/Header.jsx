import React from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import './Header.scss';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 63%;
  margin: 0 auto;
`;

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <div className="nav-items">
          <nav>
            <ul style={{ display: 'flex', gap: '30px' }}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
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
