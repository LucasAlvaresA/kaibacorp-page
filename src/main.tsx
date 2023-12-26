import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globals from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Globals />
    <App />
  </React.StrictMode>
);
