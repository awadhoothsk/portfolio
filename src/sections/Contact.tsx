import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    <h2 className="contact-heading">Contact</h2>
    <p className="contact-subtitle">Let’s connect! Reach out through any platform below:</p>

    <div className="contact-list">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span>Email:</span>
        <p><a href="mailto:awadhooths16@gmail.com">awadhoothsk</a></p>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <span>GitHub:</span>
        <p><a href="https://github.com/awadhoothsk" target="_blank" rel="noopener noreferrer">@awadhoothsk</a></p>
      </div>
      <div className="contact-item">
        <FaInstagram className="contact-icon" />
        <span>Instagram:</span>
        <p><a href="https://instagram.com/awadhoothsk" target="_blank" rel="noopener noreferrer">@awadhoothsk</a></p>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <span>LinkedIn:</span>
        <p><a href="https://www.linkedin.com/in/awadhoothsk/" target="_blank" rel="noopener noreferrer">awadhoothsk</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
