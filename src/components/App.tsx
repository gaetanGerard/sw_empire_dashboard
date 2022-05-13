import React, { useContext, useEffect } from 'react';

// Import Styles
import '../styles/App.scss';

// Import Context
// import { AuthContext } from '../context/auth/AuthProvider';

// Import Components

function App() {
  // const { login, user } = useContext(AuthContext);

  // useEffect(() => {
  //   login({ username: 'lordVador01', password: 'Ilovethedarkside123' });
  // }, [])


  return (
    <div>
      <p className="starwars">just a test for see starwars font still work</p>
      <p className="aurebesh">just a test for see aurebesh font still work</p>
    </div>
  );
}

export default App;
