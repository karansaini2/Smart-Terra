import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CropContextProvider from "./Components/CropContext";
import { StateContextProvider } from "./Components/WeatherContext";
import  SchemesContextProvider  from "./Components/SchemesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CropContextProvider>
    <StateContextProvider>
      <SchemesContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </SchemesContextProvider>
    </StateContextProvider>
  </CropContextProvider>
);
