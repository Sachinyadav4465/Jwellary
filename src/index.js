import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/Styles.css';
import { CartProvider } from "./Components/CartContext";
import { ToastContainer } from "react-toastify";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();