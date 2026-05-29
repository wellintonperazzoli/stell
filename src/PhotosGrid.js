import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { photoData } from './PhotoData';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '60%' },
  maxWidth: '600px',
  outline: 'none',
  p: { xs: 3, md: 4 },
};

export default function PhotosGrid() {
  const [open, setOpen] = React.useState(null);
  const handleOpen = (index) => {
    setOpen(index);
  };
  const handleClose = () => {
    setOpen(null);
  };


  return (
    <Box sx={{ p: { xs: 1, sm: 2 } }}>
      <Masonry columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }} spacing={3}>
        {photoData.map((item, index) => (
          <div key={index} className="photo-card">
            <div
              className="photo-card-title"
              onClick={() => handleOpen(index)}
              style={{ cursor: 'pointer' }}
            >
              {item.title}
            </div>
            <Button
              onClick={() => handleOpen(index)}
              style={{
                padding: 0,
                borderRadius: 0,
                overflow: 'hidden',
                width: '100%',
                display: 'block'
              }}
            >
              <img
                srcSet={`${item.img}`}
                src={`${item.img}?w=248&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </Button>
            <Modal
              open={open === index}
              onClose={handleClose}
              aria-labelledby={`modal-title-${index}`}
              aria-describedby={`modal-description-${index}`}
              style={{ backdropFilter: 'blur(3px)' }}
            >
              <Box sx={{ ...style }} className="modal-content">
                <Typography id={`modal-title-${index}`} variant="h5" component="h2" className="modal-title">
                  {item.title}
                </Typography>
                <Typography id={`modal-description-${index}`} className="modal-description">
                  {item.text}
                </Typography>

                <Box sx={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
                  <img
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      display: 'block',
                      maxHeight: '60vh',
                      maxWidth: '100%',
                      margin: '0 auto',
                    }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button onClick={handleClose} sx={{
                      background: 'linear-gradient(45deg, #8e24aa, #ab47bc)',
                      color: 'white',
                      borderRadius: '24px',
                      padding: '10px 32px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0 4px 10px rgba(142, 36, 170, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                          background: 'linear-gradient(45deg, #7b1fa2, #9c27b0)',
                          boxShadow: '0 6px 15px rgba(142, 36, 170, 0.5)',
                          transform: 'translateY(-2px)'
                      }
                  }}>
                    Fechar
                  </Button>
                </Box>
              </Box>
            </Modal>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
