// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css'; // Ensure this path is correct
import App from './App';

const container = document.getElementById('root');

if (container !== null) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root container not found');
}
