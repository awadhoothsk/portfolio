// // File: src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Profile from './sections/Profile';
// import About from './sections/About';
// import WorkExperience from './sections/WorkExperience';
// import Projects from './sections/Projects';
// import Interests from './sections/Interests';
// import Education from './sections/Education';
// import Contact from './sections/Contact';
// import Footer from './sections/Footer';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/profile" replace />} />
//         <Route path="/profile" element={<><Profile /><Footer /></>} />
//         <Route path="/about" element={<><About /><Footer /></>} />
//         <Route path="/work-experience" element={<><WorkExperience /><Footer /></>} />
//         <Route path="/projects" element={<><Projects /><Footer /></>} />
//         <Route path="/interests" element={<><Interests /><Footer /></>} />
//         <Route path="/education" element={<><Education /><Footer /></>} />
//         <Route path="/contact" element={<><Contact /><Footer /></>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './sections/Profile';
import About from './sections/About';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/projects';
import Interests from './sections/Interests';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css'; // Make sure this has the layout styles

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;