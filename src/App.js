import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import UnderConstruction from './components/UnderConstruction'; // Import the UnderConstruction component
import './App.css'; // Import the CSS for App


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><HeroSection /><PortfolioSection /><SkillsSection /></div>} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
