import React from 'react';
import PhotosGrid from './PhotosGrid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DiaDaMulher = () => {
    return (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2, py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                <Button 
                    component={Link} 
                    to="/" 
                    variant="outlined" 
                    sx={{
                        color: '#6a1b9a',
                        borderColor: '#6a1b9a',
                        borderRadius: '24px',
                        padding: '6px 20px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            borderColor: '#4a148c',
                            background: 'rgba(106, 27, 154, 0.1)'
                        }
                    }}
                >
                    &larr; Voltar
                </Button>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 5, mt: 2, background: 'rgba(255, 255, 255, 0.6)', borderRadius: '24px', p: 4, boxShadow: '0 8px 32px rgba(123, 31, 162, 0.15)' }}>
                <Typography variant="h3" component="h1" gutterBottom className="title-text" sx={{ fontWeight: 'bold' }}>
                    Feliz dia da mulher, baby!
                </Typography>
                <Typography variant="h6" component="p" className="subtitle-text" sx={{ maxWidth: '800px', margin: '0 auto', mt: 3 }}>
                    E por meio desse compilado brega, quero demonstrar o quanto você é especial para mim.
                    <br /><br />
                    Obrigado por estar ao meu lado nesses 10 anos, nos momentos bons e ruins.
                    Quero ver você sorrindo sempre, pois é o que me faz feliz.
                    <br /><br />
                    Bora pra cima! 💜
                </Typography>
            </Box>
            
            <PhotosGrid />
            
            <Box sx={{ textAlign: 'center' }} className="footer-text">
                08/03/2025
            </Box>
        </Box>
    )
}

export default DiaDaMulher;
