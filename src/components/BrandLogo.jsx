import React from 'react';
import './BrandLogo.css';

const BrandLogo = () => {
  return (
    <div className="brand-logo-container">
      <img 
        src="/Brand_logo_Zivah.png" 
        alt="Zivah Medical Hub Logo" 
        className="brand-logo"
      />
      <h1 className="brand-heading">Zivah Medical Hub</h1>
      <p className="brand-tagline">Your Partner in Healthcare Excellence</p>
    </div>
  );
};

export default BrandLogo;
