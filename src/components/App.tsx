import React, { useContext, useEffect } from 'react';

// Import Styles
import '../styles/App.scss';

// Import Context
// import { AuthContext } from '../context/auth/AuthProvider';

// Import Components
import Auth from './pages/Auth';

function App() {
  // const { login, user } = useContext(AuthContext);

  // useEffect(() => {
  //   login({ username: 'lordVador01', password: 'Ilovethedarkside123' });
  // }, [])


  return (
    <div className="app">
      <Auth />
    </div>
  );
}

export default App;
