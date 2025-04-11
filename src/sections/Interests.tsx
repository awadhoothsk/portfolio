import React from 'react';
import './Interests.css';
import { FaMotorcycle, FaCar, FaCode } from 'react-icons/fa';

const Interests: React.FC = () => (
  <section className="interests-section">
    <h2>Interests</h2>
    <div className="interests-cards">
      <div className="interest-card">
        <FaMotorcycle className="interest-icon" />
        <h3>Motorcycles</h3>
        <p>
          I have a keen interest in motorcycles, particularly in understanding their engineering, design, and evolving technologies.
        </p>
      </div>
      <div className="interest-card">
        <FaCar className="interest-icon" />
        <h3>Cars</h3>
        <p>
          I actively follow automotive trends and enjoy exploring innovations in car performance, safety, and design.
        </p>
      </div>
      <div className="interest-card">
        <FaCode className="interest-icon" />
        <h3>Coding</h3>
        <p>
          I’m passionate about software development and enjoy creating efficient, scalable solutions using modern technologies.
        </p>
      </div>
      <div className="interest-card">
        <FaCode className="interest-icon" />
        <h3>Hobbies</h3>
        <p>
            I enjoy playing chess as it boosts analytics skills and strategic thinking. I also like to read books, especially fiction, which helps me unwind and stimulates my imagination.
        </p>
        </div>
    </div>
  </section>
);

export default Interests;