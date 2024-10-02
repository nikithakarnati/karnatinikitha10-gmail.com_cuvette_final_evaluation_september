import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/karnatinikitha10-gmail.com_cuvette_final_evaluation_september"> {/* Replace "repo-name" with your actual repository name */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
