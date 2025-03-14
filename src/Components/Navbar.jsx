import { Link } from "react-router-dom";
import "./Navbar.css";
//import logo from "../assets/logo.png"; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
                <span className="logo-text">TS</span>
            </div>

      {/* Navbar Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

