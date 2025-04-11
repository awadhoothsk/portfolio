import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <ul>
      <li>
        <FaEnvelope /> Email: <a href="mailto:awadhooths16@gmail.com">awadhooths16@gmail.com</a>
      </li>
      <li>
        <FaInstagram /> Instagram: <a href="https://instagram.com/awadhoothsk" target="_blank" rel="noopener noreferrer">@awadhoothsk</a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/awadhoothskulkarni/" target="_blank" rel="noopener noreferrer">awadhoothskulkarni</a>
      </li>
    </ul>
  </section>
);

export default Contact;