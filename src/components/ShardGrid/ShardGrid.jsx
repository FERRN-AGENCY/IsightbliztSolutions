import React from 'react';
import './ShardGrid.css';
import { images } from '../../constants';

const ShardGrid = () => {
  return (
    <div className="about-bottom">
      <div className="div-block">
        
        {/* TOP LEFT SHARD (Row 2 & 3 on Mobile) */}
        <div className="shard-wrapper top-left-block">
          <div className="svg-container">
            {/* 1. Invisible image props the container open on desktop */}
            <img src={images.picture1} alt="" className="desktop-svg invisible-prop" />
            
            {/* 2. Mask Wrapper keeps the shape correctly oriented */}
            <div className="mask-wrapper" style={{ 
                WebkitMaskImage: `url(${images.picture1})`, 
                maskImage: `url(${images.picture1})` 
              }}>
              <video 
                src={images.Editz} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="shape-video"
              />
              {/* Desktop dark fade overlay */}
              <div className="video-overlay"></div>
            </div>
          </div>
          <div className="text-content">
            InsightBlitz is a full-stack Web3 go-to-market partner focused on one thing: execution that drives real adoption.
            <br /><br />
            We work with early-stage blockchain, crypto, and Web3 teams that are done with hype and ready to build momentum that lasts. Our approach is disciplined, data-driven, and grounded in outcomes not vanity metrics, not empty promises.
          </div>
        </div>

        {/* CENTER LOGO (Row 1 Left on Mobile) */}
        <div className="shard-wrapper middle-block">
          <img 
            src={images.logoBig}
            alt="InsightBlitz Logo" 
          />
        </div>

        {/* TOP RIGHT SHARD (Row 1 Right on Mobile) */}
        <div className="shard-wrapper top-right-block">
            <div>
                <img src={images.picture3} alt="" className='image desktop-svg' />
            </div>
            <div className='text-content tr'>$500M+ Funds<br/>Raised</div>
        </div>

        {/* BOTTOM LEFT SHARD (Row 4 on Mobile) */}
        <div className="shard-wrapper bottom-left-block">
            <img src={images.picture4} alt="" className="desktop-svg" />
            <div className="shard piece-4">
                <h2>
                    Ready to scale with clarity and conviction?
                </h2>
                <p>
                    Partner with InsightBlitz Solutions and turn insight into measurable growth.
                </p>
                <a href="https://calendly.com/jeffersonmeet/30min" className="btn">
                    Work with InsightBlitz
                </a>
            </div>
        </div>

        {/* BOTTOM RIGHT SHARDS (Hidden on Mobile) */}
        <div className="shard-wrapper bottom-right-block-1 desktop-only">
          <div className="svg-container">
             {/* Invisible structural prop */}
             <img src={images.picture2} alt="" className="desktop-svg invisible-prop" />
             
             {/* Mask Wrapper keeps the shape facing normal/right */}
             <div className="mask-wrapper" style={{ 
                WebkitMaskImage: `url(${images.picture2})`, 
                maskImage: `url(${images.picture2})` 
              }}>
                {/* Only the video itself gets reversed! */}
                <video 
                  src={images.Editz} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="shape-video reversed-video"
                />
                {/* Desktop dark fade overlay */}
              <div className="video-overlay"></div>
             </div>
          </div>
        </div>

        <div className="shard-wrapper bottom-right-block-2 desktop-only">
          <svg className="desktop-svg" width="140" height="110" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M126.837 1.83188C131.942 -2.02607 139.259 1.61533 139.259 8.0145V101.332C139.259 105.612 135.789 109.082 131.509 109.082H8.01562C0.581998 109.082 -2.58707 99.6309 3.34375 95.1493L126.837 1.83188Z" fill="#0D0D0D" stroke="#3D3D3D" strokeWidth="0.5"></path>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default ShardGrid;