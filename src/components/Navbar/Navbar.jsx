import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import './Navbar.css';
import { images } from '../../constants';

const Navbar = ({ isVisible, setToggle }) => {
  
  

  const handleMenuOpen = () => {
    console.log("%cMenu Button Clicked!", "color: yellow; font-weight: bold");
    setToggle(true);
  };

  return (
    <nav className={`app__navbar ${!isVisible ? 'nil' : ''}`}>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo" />
      </div>

      <ul className='app__navbar-links'>
        {['About Us', 'Services', 'Case Studies', 'Team', 'FAQ', 'Blog'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item.replace(/\s+/g, '')}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-button'><span>Contact Us</span></div>

      <div className="app__navbar-menu">
        {/* We trigger the setToggle passed from App.jsx */}
        <HiMenuAlt4 onClick={handleMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;