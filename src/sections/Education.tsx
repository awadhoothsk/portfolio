import React from 'react';
import './Education.css';

type EducationItem = {
  degree: string;
  institution: string;
  status: string;
  batch: string;
  percentage?: string;
  showCGPA?: boolean;
};

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Siddaganga Institute of Technology (SIT), Tumakuru',
    status: 'Currently Pursuing',
    percentage: '8.40 CGPA (up to 7th semester)',
    batch: '2021 - 2025',
    showCGPA: true,
  },
  {
    degree: 'Pre-University Education (12th)',
    institution: 'Sri Sathya Sai Loka Seva PU College, Alike',
    status: 'Completed',
    percentage: '90.33%',
    batch: '2018 - 2020',
    showCGPA: false,
  },
  {
    degree: 'Secondary Education (10th Grade)',
    institution: 'Sri Sathya Sai Loka Seva Vidyakendra, Alike',
    status: 'Completed',
    percentage: '82.22%',
    batch: '2018',
    showCGPA: false,
  }
];

const Education: React.FC = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-institution"><strong>Institution:</strong> {item.institution}</p>
            <p className="education-status"><strong>Status:</strong> {item.status}</p>
            <p className="education-inline">
              {item.showCGPA ? (
                <><strong>CGPA:</strong> {item.percentage}</>
              ) : (
                <><strong>Percentage:</strong> {item.percentage}</>
              )}
              <span className="education-batch"><strong> &nbsp; | &nbsp; Batch:</strong> {item.batch}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
