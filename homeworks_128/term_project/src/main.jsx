/* import fonts in a single entrypoint */
import '@fontsource-variable/inter';
import '@fontsource-variable/jost';
import '@fontsource/dm-serif-display';
/* font section end */

import 'leaflet/dist/leaflet.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
