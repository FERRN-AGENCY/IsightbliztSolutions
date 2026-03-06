import React, { useMemo } from 'react';
import './Star.css';

const Star = () => {
  // 1. Regular Twinkling Stars
  const stars = useMemo(() => Array.from({ length: 120 }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    delay: Math.random() * 4,
    size: Math.random() * 2 + 1
  })), []);

  // 2. Green Shooting Stars
  const shootingStars = useMemo(() => Array.from({ length: 20 }, () => ({
    top: `${Math.random() * 80}vh`, 
    left: `${Math.random() * 120}vw`,
    delay: Math.random() * 15, 
    duration: Math.random() * 1.5 + 1.5 
  })), []);

  return (
    <div className="star-bg">
      {/* Volumetric Gas / Nebula - Two specific clouds */}
      <div className="nebula-container">
        <div className="gas-cloud cloud-left"></div>
        <div className="gas-cloud cloud-right"></div>
      </div>

      {/* Twinkling Stars */}
      {/* {stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))} */}

      
    </div>
  );
};

export default Star;