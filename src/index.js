import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CropContextProvider from "./Components/CropContext"
import { StateContextProvider } from './Components/WeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CropContextProvider>
    <StateContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </StateContextProvider>
  </CropContextProvider>
);

