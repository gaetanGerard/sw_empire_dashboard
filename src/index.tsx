import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';

// Import Font
import './fonts/starjedi/Starjedi.ttf'

// Import Provider
import AuthProvider from './context/auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
