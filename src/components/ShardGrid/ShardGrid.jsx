import React from "react"; // Removed useRef and useEffect!
import "./ShardGrid.css";
import { images } from "../../constants";

const ShardGrid = () => {
  return (
    <div className="about-bottom">
      <div className="div-block">
        {/* TOP LEFT SHARD (Using your perfectly reversed file) */}
        <div className="shard-wrapper top-left-block">
          <div className="svg-container">
            <img
              src={images.picture1}
              alt=""
              className="desktop-svg invisible-prop"
            />

            <div
              className="mask-wrapper"
              style={{
                WebkitMaskImage: `url(${images.picture1})`,
                maskImage: `url(${images.picture1})`,
              }}
            >
              <video
                src={images.Editz2} // Updated to your new reversed file
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
            InsightBlitz Solutions is a full-stack AI deployment partner focused
            on one thing: making sure every call gets answered and every lead
            gets booked.
            <br />
            <br />
            We work with businesses that are done losing revenue to voicemail,
            slow follow-up, and after-hours gaps. Our approach is disciplined
            and grounded in booked appointments not vanity metrics, not empty
            promises.
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="shard-wrapper middle-block">
          <img src={images.logoBig} alt="InsightBlitz Logo" />
        </div>

        {/* TOP RIGHT SHARD */}
        <div className="shard-wrapper top-right-block">
          <div>
            <img src={images.picture3} alt="" className="image desktop-svg" />
          </div>
          <div className="text-content tr">
            500+ Systems
            <br />
            Deployed
          </div>
        </div>

        {/* BOTTOM LEFT SHARD */}
        <div className="shard-wrapper bottom-left-block">
          <img src={images.picture4} alt="" className="desktop-svg" />
          <div className="shard piece-4">
            <h2>Ready to scale with clarity and conviction?</h2>
            <p>
              Partner with InsightBlitz Solutions and turn every missed call
              into a booked appointment.
            </p>
            <a href="https://calendly.com/jeffersonmeet/30min" className="btn">
              Work with InsightBlitz
            </a>
          </div>
        </div>

        {/* BOTTOM RIGHT SHARDS */}
        <div className="shard-wrapper bottom-right-block-1 desktop-only">
          <div className="svg-container">
            <img
              src={images.picture2}
              alt=""
              className="desktop-svg invisible-prop"
            />

            <div
              className="mask-wrapper"
              style={{
                WebkitMaskImage: `url(${images.picture2})`,
                maskImage: `url(${images.picture2})`,
              }}
            >
              <video
                src={images.Editz}
                autoPlay
                loop
                muted
                playsInline
                /* Removed "reversed-video" so it does NOT mirror-flip anymore */
                className="shape-video"
              />
            </div>
          </div>
        </div>

        <div className="shard-wrapper bottom-right-block-2 desktop-only">
          <svg
            className="desktop-svg"
            width="140"
            height="110"
            viewBox="0 0 140 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M126.837 1.83188C131.942 -2.02607 139.259 1.61533 139.259 8.0145V101.332C139.259 105.612 135.789 109.082 131.509 109.082H8.01562C0.581998 109.082 -2.58707 99.6309 3.34375 95.1493L126.837 1.83188Z"
              fill="#0D0D0D"
              stroke="#3D3D3D"
              strokeWidth="0.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ShardGrid;
