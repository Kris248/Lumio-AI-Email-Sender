import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo-icon">L</div>
        <div className="logo-text">Lumio</div>
      </div>
      <nav>
        <button className="btn btn-secondary">
          <FaQuestionCircle /> Help
        </button>
      </nav>
    </header>
  );
};

export default Header;