import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact'; // Import Contact component
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
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
      </Routes>
    </Router>
  );
}

export default App;
