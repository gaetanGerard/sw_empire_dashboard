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
import Description from './pages/Description';
import Add from './pages/Add';

//TODO: NEXT STEPS
//TODO: Dockerize the app

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
        <Route path="/wanted-profile-detail" element={<RequiredAuth><Description /></RequiredAuth>} />
        <Route path="/wanted-profile-detail/:action" element={<RequiredAuth><Add /></RequiredAuth>} />
        <Route path="/intrusion-alert" element={<IntrusionAlert />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
