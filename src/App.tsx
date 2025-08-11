import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Profile from './sections/Profile';
import About from './sections/About';
import Experience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Interests from './sections/Interests';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
