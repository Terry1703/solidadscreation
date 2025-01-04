import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Video background and welcome message */}
      <video className="video-background" autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/20738569/20738569-sd_360_640_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="welcome-message">Hello, Welcome to Muderaa's World!</div>

      <div className="title-section">
        {/* Title with typing effect and glowing gold */}
        <h1 className="glow-title">Solidad's Portfolio</h1>
        <h1 className="sub-heading">🦋 Work of art  🦋</h1>
      </div>

      {/* Wrap the button in a Link to navigate to the profile page */}
      <Link to="/projects">
        <button className="welcome-btn">Welcome Home 😻</button>
      </Link>

      <Footer />
    </div>
  );
};

export default Home;
