import React, { useState } from 'react';
// @ts-ignore
import logo from '../IMGS/logo_rava.png';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="box-header">
        <div className="box-logo">
          <img className="logo-rava" src={logo} alt="Logotipo da empresa" />
        </div>
        <button
          className={`menu-button ${isSidebarOpen ? 'hidden' : ''}`}
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <nav className={`box-links-nav ${isSidebarOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleSidebar}>
            &times;
          </button>
          <a href="#" className="links-nav poppins">Home</a>
          <a href="#" className="links-nav poppins">About</a>
          <a href="#" className="links-nav poppins">Services</a>
          <a href="#" className="links-nav poppins">Team</a>
          <a href="#" className="links-nav poppins">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;