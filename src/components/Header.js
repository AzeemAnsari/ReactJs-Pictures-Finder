import React from 'react';
import Logo from '../images/logo.png';
import { LogoImg } from './Styles';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <LogoImg src={Logo} alt="Azeem Ansari" />
          <a
            href="https://github.com/AzeemAnsari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <strong>GitHub</strong>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
