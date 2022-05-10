import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks((prevShow) => !prevShow)}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks ? 'show-container' : ''}`}>
          <ul className='links'>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialItem) => (
            <li key={socialItem.id}>
              <a href={socialItem.url}>{socialItem.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
