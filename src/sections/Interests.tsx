import React from 'react';
import './Interests.css';
import { FaMotorcycle, FaCar, FaCode, FaChessKnight } from 'react-icons/fa';

const Interests: React.FC = () => {
  return (
    <section className="interests-section" id="interests">
      <h2 className="interests-heading">Interests</h2>
      <div className="interests-list">
        <div className="interest-card">
          <h3 className="interest-title">Motorcycles</h3>
          <FaMotorcycle className="interest-icon" />
          <p className="interest-description">
            Enthusiastic about motorcycle engineering, performance, and evolving two-wheeler technology.
          </p>
        </div>

        <div className="interest-card">
          <h3 className="interest-title">Cars</h3>
          <FaCar className="interest-icon" />
          <p className="interest-description">
            Passionate about automotive innovation, design, and high-performance engineering.
          </p>
        </div>

        <div className="interest-card">
          <h3 className="interest-title">Coding</h3>
          <FaCode className="interest-icon" />
          <p className="interest-description">
            I love solving real-world problems with efficient, scalable code and modern technologies.
          </p>
        </div>

        <div className="interest-card">
          <h3 className="interest-title">Chess & Reading</h3>
          <FaChessKnight className="interest-icon" />
          <p className="interest-description">
            Chess sharpens my thinking; fiction books inspire creativity and help me unwind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interests;
