import React from 'react';
import './Star.css';
import { images } from '../../constants';

const Star = () => {
  return (
    <div 
      className="star-bg"
      style={{ 
        backgroundImage: `url(${images.background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Volumetric Gas / Nebula - Two specific clouds */}
      <div className="nebula-container">
        <div className="gas-cloud cloud-left"></div>
        <div className="gas-cloud cloud-right"></div>
      </div>
    </div>
  );
};

export default Star;