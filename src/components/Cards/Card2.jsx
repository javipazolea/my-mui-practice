import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Card2 = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
    setFlipped(!flipped);
};

return (
    <Box
        sx={{
        perspective: '1000px', // Da un efecto 3D realista
        width: 300,
        height: 200,
        }}
    >
        <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onClick={handleFlip}
        >
        {/* Cara frontal */}
        <Box
            sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundImage: 'url(https://www.datocms-assets.com/55615/1699353007-1699253744-jungkook-bts-golden.jpg?auto=format%2Ccompress&cs=srgb)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
    }}
        ><Button variant="text" color="secondary" sx={{
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.1)' },marginTop:20, marginBottom:20, marginLeft:14
        }} onClick={handleFlip}>
        CLICK
        </Button></Box> 

        {/* Cara trasera */}
        <Box
            sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: 'grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            padding: 2,
            }}
        >
            <Typography variant="h6">EJEMPLO FLIP</Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae voluptatibus, ratione deleniti sit dignissimos. Tempora ad ut provident aliquid neque, placeat vel nobis dolores, unde sequi dignissimos nostrum et?
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleFlip}>
            SLAY
            </Button>
        </Box>
        </Box>
    </Box>
);
};

export default Card2;
