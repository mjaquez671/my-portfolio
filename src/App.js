import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
