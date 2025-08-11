import React from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const workData = [
    {
      role: 'Fullstack Developer Intern',
      company: 'StackLane by Purpleshorts Technologies',
      duration: 'Mar 2025 - Ongoing',
      description: 'Built responsive React components, integrated APIs, and optimized UI for performance across multiple devices.'
    },
  ];

  return (
    <section className="work-section" id="work">
      <h2 className="work-heading">Work Experience</h2>
      <div className="work-container">
        {workData.map((item, index) => (
          <div className="work-card" key={index}>
            <h3>{item.role}</h3>
            <span>{item.company} &bull; {item.duration}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
