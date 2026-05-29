import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DiaDosNamorados2026 = () => {
    return (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2, py: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 5, mt: 2, background: 'rgba(255, 255, 255, 0.6)', borderRadius: '24px', p: 4, boxShadow: '0 8px 32px rgba(123, 31, 162, 0.15)' }}>
                <Typography variant="h3" component="h1" gutterBottom className="title-text" sx={{ fontWeight: 'bold' }}>
                    Feliz Dia dos Namorados, meu amor!
                </Typography>
                <Typography variant="h6" component="p" className="subtitle-text" sx={{ mt: 3 }}>
                    Em construção... Mais surpresas virão em breve! 💜
                </Typography>
            </Box>
            
            <Button 
              component={Link} 
              to="/" 
              variant="outlined" 
              sx={{
                color: '#6a1b9a',
                borderColor: '#6a1b9a',
                borderRadius: '24px',
                padding: '8px 24px',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#4a148c',
                  background: 'rgba(106, 27, 154, 0.1)'
                }
              }}
            >
              Voltar para o Menu
            </Button>
        </Box>
    );
};

export default DiaDosNamorados2026;
