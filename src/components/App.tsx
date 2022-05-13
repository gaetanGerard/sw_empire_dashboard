import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Import Styles
import '../styles/App.scss';

// Import Components
import Auth from './pages/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import IntrusionAlert from './pages/IntrusionAlert';
import RequiredAuth from './ui/RequiredAuth';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
        <Route path="/intrusion-alert" element={<IntrusionAlert />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
