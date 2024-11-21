import React from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>


        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#aircraft">Aircraft</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a href="#learn-more" className="btn">Learn More</a>
      </div>
    </header>
  );
};

export default Header;
