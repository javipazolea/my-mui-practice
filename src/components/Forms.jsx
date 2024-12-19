import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Forms = () => {
return (
    <Box component="form" noValidate autoComplete="off">
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="success">Submit</Button>
    </Box>
);
};

export default Forms;
