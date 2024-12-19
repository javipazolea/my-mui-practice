import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import EjemploMenu from '../components/Navegacion/EjemploMenu';
const MainLayout = ({ children }) => {
return (
    <>
        <AppBar position="static">
        <Toolbar>
            <EjemploMenu />
            <Typography variant="h6" sx={{marginLeft:10}}>PRÁCTICA MUI</Typography>
        </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '16px' }}>
        {children}
        </Container>
    </>
);
};

export default MainLayout;
