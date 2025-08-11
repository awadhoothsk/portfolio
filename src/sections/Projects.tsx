import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Restaurant Management System</h3>
          <p className="project-description">
            Created a system for order placement, billing, and menu management using C++ and SQL.
          </p>
          <span className="project-tech">C++, SQL</span>
        </div>
        <div className="project-card">
          <h3 className="project-title">Brain Tumor Classification</h3>
          <p className="project-description">
            Built a CNN model in TensorFlow to classify brain tumors with Streamlit-based UI.
          </p>
          <span className="project-tech">Python, TensorFlow, Streamlit</span>
        </div>
        <div className="project-card">
          <h3 className="project-title">Hacker-news Server</h3>
          <p className="project-description">
            Cloneded a backend server similar to Hackernews Website.
          </p>
          <span className="project-tech">PostgreSQL, Nodejs</span>
        </div>
        <div className="project-card">
          <h3 className="project-title">Wholesale Management</h3>
          <p className="project-description">
            Designed a wholesale system with inventory tracking and order management using SQL.
          </p>
          <span className="project-tech">SQL</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
