import React from 'react';
import Logo from './Logo';

export function Header() {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="nav-items">
          <nav>
            <ul>
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
          <img src="../assets/images/search-icon.svg" alt="search-icon" />
        </div>
      </div>
    </header>
  );
}
