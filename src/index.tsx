import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { UserContextProvider } from './utils/context/UserContext';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
