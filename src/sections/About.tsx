import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p className="about-paragraph">
          I'm a Computer Science engineering student passionate about full-stack development, problem-solving, and building intuitive digital experiences. I enjoy creating user-friendly UIs and scalable backend systems.
        </p>
        <p className="about-paragraph">
          Apart from coding, I’m fascinated by motorcycles and cars, and I love playing chess and reading fiction. These hobbies fuel both my creativity and analytical thinking.
        </p>
      </div>
    </section>
  );
};

export default About;
