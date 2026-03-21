import React from 'react';
// Make sure your 'image' object is imported correctly based on your folder structure
import image from '../../constants/images'; 
import './Header.css'; 

const Header = () => {
  return (
    <div className='app__header'>
      {/* Left Text Column */}
      <div className='app__header-content'>
        <h1 className='header-title'>
          I Build Systems That <br />
          Grow <span className='text-green'>Brands, Automate</span> <br />
          Workflows & Drive <br />
          <span className='text-green'>Revenue</span>
        </h1>
        
        <p className='header-subtitle'>
          I help startups, creators, and businesses scale through smart marketing, automation, and strategic consulting.
        </p>
        
        <button type="button" className='header-btn'>
          <span className='btn-circle'></span>
          Book a Call
        </button>
      </div>

      {/* Right Image Column */}
      <div className='app__header-image'>
        <img src={image.userProf} alt="Abraham Aguilar" />
      </div>
    </div>
  )
}

export default Header;