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
//TODO: finalize digest of data for the add/edit form
//TODO: valide function for add a profile is working
//TODO: validate function for edit a profile is working
//TODO: validate function for remove a profile is working
//TODO: Add Loading animation when data are loading
//TODO: Search for bugs
//TODO: Improve Responsive as much as its can be

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
