import React from 'react';
import { Link } from 'react-router-dom';
import './Herro.css';

const Herro = () => {
  return (
    <div className="herro-section">
      {/* Video background */}
      <video className="video-background" autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/20738569/20738569-sd_360_640_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="welcome-message">Hello,</div>

      <div className="title-section">
        {/* Title with typing effect and glowing gold */}
        <h1 className="glow-title">I am Terry Solidad</h1>
        <h1 className="sub-heading">🦋 Full-Stack Developer | React • Flask • PostgreSQL 🦋</h1>
      </div>

      {/* Button to view projects */}
      <Link to="/projects">
        <button className="welcome-btn">View Projects 😻</button>
      </Link>
    </div>
  );
};

export default Herro;
