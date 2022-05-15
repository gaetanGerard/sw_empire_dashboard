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

/*
*
*
* For Edit i should look if i can add a parameter or a state to the route for i reuse the add component
* example i click on a card and after on a button edit who should redirect me to the add form but with
* the information send by the card
*
*
*/

// TODO: Work on Card for display item
// TODO: when click on Card i should see the description of the profile
// TODO: i should as i am a logged in user have the possibility to Edit
// TODO: on Admin Page i should also have a list of all profiles but also have the possiblity Add a new profile and also delete and update the profile
// ! The initial list should be possible to edit status but not to delete i should add a field for prevent deletion

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
