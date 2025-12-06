import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TieredMembership from './pages/TieredMembership/TieredMembership';
import Footer from './components/Footer/Footer';
import StudyPortfolio from './pages/StudyPortfolio/StudyPortfolio';
import InternshipMarketplace from './pages/InternshipMarketplace/InternshipMarketplace';
import FeesAndPricing from './pages/FeesAndPricing/FeesAndPricing';
import PlatformCompliance from './pages/PlatformCompliance/PlatformCompliance';
import FoundingRoadmap from './pages/FoundingRoadmap/FoundingRoadmap';
import WhatWeWillMeasure from './pages/WhatWeWillMeasure/WhatWeWillMeasure';
import AccessToDoctorate from './pages/Researchers/AccessToDoctorate/AccessToDoctorate';
import PhDThesis from './pages/Researchers/PhDThesis/PhDThesis';
import ManagementTraining from './pages/Researchers/ManagementTraining/ManagementTraining';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiered-membership" element={<TieredMembership />} />
          <Route path="/study-portfolio" element={<StudyPortfolio />} />
          <Route path="/internship-marketplace" element={<InternshipMarketplace />} />
          <Route path="/fees-and-pricing" element={<FeesAndPricing />} />
          <Route path="/platform-compliance" element={<PlatformCompliance />} />
          <Route path="/founding-roadmap" element={<FoundingRoadmap />} />
          <Route path="/what-we-will-measure" element={<WhatWeWillMeasure />} />
          <Route path="/researchers/access-doctorate" element={<AccessToDoctorate />} />
          <Route path="/researchers/phd-thesis" element={<PhDThesis />} />
          <Route path="/researchers/management-training" element={<ManagementTraining />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
