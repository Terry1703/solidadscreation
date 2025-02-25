import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Navbar from './Components/Navbar'; 
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';  // Import the Skills component
import About from './Components/About';
import ProfilePage from './Components/ProfilePage'; // Import ProfilePage component
// import Resume from './Components/Resume'; // Create Resume component (if needed)
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrapping the whole app with Router */}
      <Navbar />  {/* Add Navbar here */}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} /> {/* Add route for Skills */}
        <Route path="/about" element={<About />} /> {/* Add route for About */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
      </Routes>
    </Router>
  );
}

export default App;
