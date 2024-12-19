import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const images = [
    'https://i.ytimg.com/vi/5Z8lrYdWFyM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWiAUrHlz1P_w3vw33k9PsUW-KBw',
    'https://i.ytimg.com/vi/CvByKIDfiL8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSFmjYcIGNLxp2ZD62cccobiWNfA',
    'https://i.ytimg.com/vi/eK4OjWme3gs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBEhGQYsjYcVZ8KJHw-DiujAjfkSg',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <Box
        sx={{
        position: 'relative',
        width: '80%',
        height: 400,
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: 3,
        }}
    >
      {/* Contenedor de las imágenes */}
        <Box
        sx={{
            display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
        }}
        >
        {images.map((image, index) => (
            <Box
            key={index}
            component="img"
            src={image}
            alt={`Image ${index + 1}`}
            sx={{
                minWidth: '100%',
                height: '400px',
                objectFit: 'cover',
            }}
            />
        ))}
        </Box>

      {/* Botones de navegación */}
        <IconButton
        onClick={handlePrev}
        sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
        >
            <ArrowBackIos />
        </IconButton>
        <IconButton
        onClick={handleNext}
        sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
        >
            <ArrowForwardIos />
        </IconButton>

        {/* Indicadores */}
        <Box
        sx={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
        }}
        >
        {images.map((_, index) => (
            <Box
            key={index}
            sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? '#1976d2' : '#c4c4c4',
                transition: 'background-color 0.3s',
            }}
            ></Box>
        ))}
        </Box>
    </Box>
    );
};

export default Carousel;
