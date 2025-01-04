import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li> {/* Link to the Skills page */}
        <li><Link to="/about">About</Link></li> {/* Link to the About page */}
        <li><Link to="/profile">Profile</Link></li> {/* Link to the Profile page */}
        <li><Link to="/resume">Resume</Link></li> {/* Link to the Resume page */}
      </ul>
    </nav>
  );
};

export default Navbar;
