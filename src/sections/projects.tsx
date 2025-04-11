import React from 'react';
import './Projects.css';
import { FaHotel, FaBrain, FaDatabase } from 'react-icons/fa';

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <FaHotel className="project-icon" />
        <h3>Hotel Management System</h3>
        <p>
          Designed a robust system using C++ and Doubly Linked Lists. Includes separate Admin and Customer modules for menu management, order placement, and billing summaries.
        </p>
      </div>
      <div className="project-card">
        <FaBrain className="project-icon" />
        <h3>Brain Tumor Classification</h3>
        <p>
          Developed a CNN-based model in TensorFlow to classify brain tumors from medical images with advanced preprocessing, enhancing diagnostic accuracy in healthcare.
        </p>
      </div>
      <div className="project-card">
        <FaDatabase className="project-icon" />
        <h3>Wholesale Management System</h3>
        <p>
          Built a structured SQL-based system for managing wholesale operations. Features include inventory tracking, order processing, and detailed reporting.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
