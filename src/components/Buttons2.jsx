import React from 'react';
import { Button, Box } from '@mui/material';

const Transitions = () => {
    return (
    <Box display="flex" gap={2}>
        <Button 
        variant="contained" 
        color="primary" 
        sx={{
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.1)' },
        }}
        >
        HOVER
        </Button>
        <Button 
        variant="outlined" 
        color="secondary" 
        sx={{
            transition: 'all 0.3s',
            '&:hover': { backgroundColor: 'secondary.light', color: '#fff' },
        }}
        >
            FOCUS
        </Button>
    </Box>
    );
};

export default Transitions;
