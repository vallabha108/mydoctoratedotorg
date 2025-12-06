import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TieredMembership from './pages/TieredMembership/TieredMembership';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiered-membership" element={<TieredMembership />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
