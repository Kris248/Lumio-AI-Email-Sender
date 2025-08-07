import React from 'react';
import { FaBrain, FaBolt, FaSlidersH } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features">
      <div className="feature-card">
        <div className="feature-icon">
          <FaBrain />
        </div>
        <h3 className="feature-title">AI-Powered</h3>
        <p className="feature-desc">Leverage advanced AI to create professional, context-aware emails in seconds.</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <FaBolt />
        </div>
        <h3 className="feature-title">Lightning Fast</h3>
        <p className="feature-desc">Generate high-quality email content 10x faster than manual writing.</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <FaSlidersH />
        </div>
        <h3 className="feature-title">Fully Customizable</h3>
        <p className="feature-desc">Edit and personalize every email before sending to match your style.</p>
      </div>
    </div>
  );
};

export default Features;