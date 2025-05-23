import './index.css';
import App from './App';
import { AuthProvider } from './Contexts/auth_context';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);