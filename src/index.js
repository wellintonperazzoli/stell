import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PhotosGrid from './PhotosGrid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Feliz dia da mulher, baby!
      </Typography>
      <Typography variant="subtitle2" component="h1" gutterBottom>
        E por meio desse compilado brega, quero demonstrar o quanto você é especial para mim.
        <br />
        Obrigado por estar ao meu lado nesses 10 anos, nos momentos bons e ruins.
        <br />
        Quero ver você sorrindo sempre, pois é o que me faz feliz.
        <br />
        Bora pra cima!
        <br />
        💜
        <br />
      </Typography>
    </Box>
    <PhotosGrid />
    <Box sx={{ textAlign: 'center', p: 2, borderTop: '1px solid rgba(162, 0, 236, 0.6)' }}>
      08/03/2025
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
