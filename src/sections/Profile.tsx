import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-container">
        <img
          src="/pic.jpg"
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <h1 className="profile-name">Awadhooth Shrinivas Kulkarni</h1>
          <p className="profile-role">Aspiring FullStack Developer | Tech Enthusiast</p>
          <a href="/AWADHOOTH_SIT.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
