import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DiaDaMulher from './DiaDaMulher';
import DiaDosNamorados2026 from './DiaDosNamorados2026';
import Home from './Home';
import WSTimeline from './WSTimeline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diadamulher" element={<DiaDaMulher />} />
        <Route path="/diadosnamorados2026" element={<DiaDosNamorados2026 />} />
        <Route path="/timeline" element={<WSTimeline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
