import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';
import MyPortfolioProject from './pages/MyPortfolioProject';
import PartyOnSiteProject from './pages/PartyOnSiteProject';
import ErgCoachProject from './pages/ErgCoachProject';
import AiAssistantProject from './pages/AiAssistantProject';
import AdhesiveTrackerProject from './pages/AdhesiveTrackerProject';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/my-portfolio" element={<MyPortfolioProject />} />
          <Route path="/projects/party-on-site" element={<PartyOnSiteProject />} />
          <Route path="/projects/erg-coach" element={<ErgCoachProject />} />
          <Route path="/projects/ai-assistant" element={<AiAssistantProject />} />
          <Route path="/projects/adhesive-tracker" element={<AdhesiveTrackerProject />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
