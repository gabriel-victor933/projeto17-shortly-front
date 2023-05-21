import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Reset, Global} from "./style/style"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>
);

