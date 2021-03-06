import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// Import Font
import './fonts/aurebesh/Aurebesh.otf'
import './fonts/starjedi/Starjedi.ttf'

// Import Provider
import AuthProvider from './context/auth/AuthProvider';
import WantedProvider from './context/wanted/WantedProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WantedProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WantedProvider>
    </AuthProvider>
  </React.StrictMode>
);
