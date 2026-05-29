import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      boxSizing: 'border-box',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      p: 3
    }}>
      <Paper elevation={3} sx={{
        p: 5,
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.85)',
        textAlign: 'center',
        maxWidth: 500,
        width: '100%',
        boxShadow: '0 8px 32px rgba(123, 31, 162, 0.2)'
      }}>
        <Typography variant="h4" component="h1" gutterBottom className="title-text" sx={{ mb: 4 }}>
          Momentos Especiais 💜
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Button 
            component={Link} 
            to="/diadamulher" 
            variant="contained" 
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #8e24aa, #ab47bc)',
              color: 'white',
              borderRadius: '24px',
              padding: '12px 24px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 10px rgba(142, 36, 170, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #7b1fa2, #9c27b0)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Dia da Mulher
          </Button>

          <Button 
            component={Link} 
            to="/diadosnamorados2026" 
            variant="contained" 
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #6a1b9a, #8e24aa)',
              color: 'white',
              borderRadius: '24px',
              padding: '12px 24px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 10px rgba(106, 27, 154, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #4a148c, #7b1fa2)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Dia dos Namorados 2026
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
