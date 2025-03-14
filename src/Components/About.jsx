import React from 'react';
import { FaCode, FaBook, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about-me">
      <h1>About Me</h1>
      <p>
        I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
        With expertise in modern web technologies and a strong foundation in software engineering principles,
        I bring ideas to life through clean, efficient code.
      </p>
      <div className="about-details">
        <div className="card about-item">
          <h2>Development</h2>
          <FaCode className="icon" />
          <p>Full-stack development with modern technologies</p>
        </div>
        <div className="card about-item">
          <h2>Learning</h2>
          <FaBook className="icon" />
          <p>Continuous learner and technology enthusiast</p>
        </div>
        <div className="card about-item">
          <h2>Passion</h2>
          <FaHeart className="icon" />
          <p>Dedicated to creating impactful solutions</p>
        </div>
      </div>
    </section>
  );
};

export default About;
