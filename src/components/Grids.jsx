import React from 'react';
import { Grid, Paper } from '@mui/material';

const Grids = () => {
return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
        <Paper style={{ padding: '16px' }}>Grid Item 1</Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper style={{ padding: '16px' }}>Grid Item 2</Paper>
        </Grid>
    </Grid>
);
};

export default Grids;
