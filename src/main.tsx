import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/provides/Router'
import { BrowserRouter } from 'react-router-dom';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);


