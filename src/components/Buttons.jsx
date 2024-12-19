import React from 'react';
import {Button, Stack} from '@mui/material';

const Buttons = () => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">Color: Primary</Button>
            <Button variant="contained" color="secondary">Color: Secondary</Button>
            <Button variant="contained" color="default">Color: Default</Button>
            <Button variant="text">variant: Text</Button>
            <Button variant="contained">variant: Contained</Button>
            <Button variant="outlined">variant: Outlined</Button>
        </Stack>
    );
};


export default Buttons;