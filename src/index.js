import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CropContextProvider from "./Components/CropContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CropContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </CropContextProvider>
);

