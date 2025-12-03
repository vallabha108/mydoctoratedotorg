import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg className="logo-icon" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graduation Cap Icon */}
        <g>
          {/* Cap top */}
          <path d="M50 20L10 40L50 60L90 40L50 20Z" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
          {/* Cap board */}
          <rect x="35" y="35" width="30" height="3" fill="#1e3a8a"/>
          {/* Tassel */}
          <line x1="80" y1="40" x2="80" y2="55" stroke="#1e3a8a" strokeWidth="2"/>
          <circle cx="80" cy="58" r="3" fill="#1e3a8a"/>
          {/* Bottom part */}
          <path d="M30 45L30 60C30 65 40 70 50 70C60 70 70 65 70 60L70 45" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
        </g>
      </svg>
      <span className="logo-text">MyDoctorate</span>
    </div>
  );
};

export default Logo;
