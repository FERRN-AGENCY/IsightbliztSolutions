import React, { useRef, useEffect } from 'react'; // 1. Import useRef and useEffect
import './ShardGrid.css';
import { images } from '../../constants';

const ShardGrid = () => {
  // 2. Create a reference to target the top-left video
  const reverseVideoRef = useRef(null);

  // 3. The OPTIMIZED Reverse Playback Logic
  useEffect(() => {
    const video = reverseVideoRef.current;
    if (!video) return;

    let animationFrameId;
    let lastTimestamp = performance.now();
    
    // --- TWEAK THIS NUMBER ---
    // 1.0 = Normal speed. 1.5 = 50% faster. 2.0 = Double speed.
    const playbackSpeed = 1.5; 

    const rewindLoop = (currentTimestamp) => {
      // Calculate exactly how much time passed since the last frame
      const deltaTime = (currentTimestamp - lastTimestamp) / 1000;
      lastTimestamp = currentTimestamp;

      if (video.currentTime <= 0.1) {
        video.currentTime = video.duration; // Loop back to the end
      } else {
        // Move backward smoothly based on actual time passed
        video.currentTime -= (deltaTime * playbackSpeed);
      }
      
      animationFrameId = requestAnimationFrame(rewindLoop);
    };

    const startRewind = () => {
      video.pause(); 
      video.currentTime = video.duration; 
      lastTimestamp = performance.now();
      animationFrameId = requestAnimationFrame(rewindLoop);
    };

    if (video.readyState >= 1) {
      startRewind();
    } else {
      video.addEventListener('loadedmetadata', startRewind);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadedmetadata', startRewind);
    };
  }, []);
  
  return (
    <div className="about-bottom">
      <div className="div-block">
        
        {/* TOP LEFT SHARD (Now playing in reverse!) */}
        <div className="shard-wrapper top-left-block">
          <div className="svg-container">
            <img src={images.picture1} alt="" className="desktop-svg invisible-prop" />
            
            <div className="mask-wrapper" style={{ 
                WebkitMaskImage: `url(${images.picture1})`, 
                maskImage: `url(${images.picture1})` 
              }}>
              <video 
                ref={reverseVideoRef} // 4. Attach the ref here
                src={images.Editz} 
                muted 
                playsInline 
                className="shape-video"
                // Note: We removed 'autoPlay' and 'loop' here because our script handles it now!
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

        {/* CENTER LOGO */}
        <div className="shard-wrapper middle-block">
          <img 
            src={images.logoBig}
            alt="InsightBlitz Logo" 
          />
        </div>

        {/* TOP RIGHT SHARD */}
        <div className="shard-wrapper top-right-block">
            <div>
                <img src={images.picture3} alt="" className='image desktop-svg' />
            </div>
            <div className='text-content tr'>$500M+ Funds<br/>Raised</div>
        </div>

        {/* BOTTOM LEFT SHARD */}
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

        {/* BOTTOM RIGHT SHARDS */}
        <div className="shard-wrapper bottom-right-block-1 desktop-only">
          <div className="svg-container">
             <img src={images.picture2} alt="" className="desktop-svg invisible-prop" />
             
             <div className="mask-wrapper" style={{ 
                WebkitMaskImage: `url(${images.picture2})`, 
                maskImage: `url(${images.picture2})` 
              }}>
                <video 
                  src={images.Editz} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="shape-video reversed-video" /* This one is still just mirrored horizontally */
                />
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