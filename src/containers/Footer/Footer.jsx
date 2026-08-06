import React from 'react';
import { images } from '../../constants';
import { footerLinks } from './FooterData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={images.logoBig} alt="InsightBlitz" className="footer-logo" />
          </div>
          
          <div className="footer-links-container">
            {footerLinks.map((group, index) => (
              <div key={index} className="footer-link-group">
                <h4 className="footer-group-title">{group.title}</h4>
                <ul className="footer-list">
                  {group.links.map((item, i) => (
                    <li key={i}><a href={item.link}>{item.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#"><img src={images.twitter} alt="X" /></a>
            <a href="#"><img src={images.linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={images.discord} alt="Discord" /></a>
          </div>

          <div className="footer-copyright">
            © 2025 Insightblitz Solutions
          </div>

          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy</a>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="footer-bg-text">
          Insightblitz
        </div>
      </div>
    </footer>
  );
};

export default Footer;