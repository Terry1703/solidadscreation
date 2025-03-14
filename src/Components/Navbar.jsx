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
      <li><Link to="/Contact">Contact</Link></li> {/* Link to the contact page */}
      </ul>
    </nav>
  );
};

export default Navbar;
