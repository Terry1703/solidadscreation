import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Video background and welcome message */}
      <video className="video-background" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2017/11/13/12922-242538643_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="welcome-message">Hello Welcome!!!,</div>

      <div className="title-section">
        {/* Title with typing effect and glowing gold */}
        <h1 className="glow-title">I am Terry Solidad</h1>
        <h1 className="sub-heading">🦋 Full-Stack Developer | React • Flask • PostgreSQL 🦋</h1>
      </div>

      {/* Wrap the button in a Link to navigate to the profile page */}
      <Link to="/projects">
        <button className="welcome-btn">view Projects 😻</button>
      </Link>

      <Footer />
    </div>
  );
};

export default Home;
