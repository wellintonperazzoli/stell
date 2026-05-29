import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { photoData } from './PhotoData';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: '80%', md: '60%' },
  maxWidth: '600px',
  maxHeight: '90vh',
  overflowY: 'auto',
  outline: 'none',
  p: { xs: 2, sm: 3, md: 4 },
  display: 'flex',
  flexDirection: 'column',
};

export default function PhotosGrid() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  
  // State for swipe gestures
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const minSwipeDistance = 50;

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };
  
  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = React.useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex !== null ? (prevIndex + 1) % photoData.length : null));
  }, []);

  const handlePrev = React.useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex !== null ? (prevIndex - 1 + photoData.length) % photoData.length : null));
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === 'ArrowRight') {
          handleNext();
        } else if (event.key === 'ArrowLeft') {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Only render modal contents if a photo is selected
  const selectedPhoto = selectedIndex !== null ? photoData[selectedIndex] : null;

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
          </div>
        ))}
      </Masonry>

      <Modal
        open={selectedIndex !== null}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ backdropFilter: 'blur(3px)' }}
      >
        <Box 
          sx={{ ...style }} 
          className="modal-content"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {selectedPhoto && (
            <>
              <Typography id="modal-title" variant="h5" component="h2" className="modal-title">
                {selectedPhoto.title}
              </Typography>
              <Typography id="modal-description" className="modal-description">
                {selectedPhoto.text}
              </Typography>

              <Box sx={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <img
                  srcSet={`${selectedPhoto.img}`}
                  src={`${selectedPhoto.img}`}
                  alt={selectedPhoto.title}
                  loading="lazy"
                  style={{
                    display: 'block',
                    maxHeight: '45vh',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    margin: '0 auto',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                  draggable="false"
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                <IconButton onClick={handlePrev} sx={{ color: '#8e24aa', '&:hover': { background: 'rgba(142, 36, 170, 0.1)' } }}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                
                <Button onClick={handleClose} sx={{
                    background: 'linear-gradient(45deg, #8e24aa, #ab47bc)',
                    color: 'white',
                    borderRadius: '24px',
                    padding: '8px 24px',
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

                <IconButton onClick={handleNext} sx={{ color: '#8e24aa', '&:hover': { background: 'rgba(142, 36, 170, 0.1)' } }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
