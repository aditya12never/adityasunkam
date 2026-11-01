import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// @ts-ignore CSS side-effect imports are handled by the bundler.
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
