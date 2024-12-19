import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const CardExample = () => (
    <Card
    sx={{
        maxWidth: 345,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
        transform: 'scale(1.05)', // Aumenta ligeramente el tamaño
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Agrega sombra al hacer hover
        },
    }}
    >
    <CardMedia
        component="img"
        height="100%"
        image="https://6.soompi.io/wp-content/uploads/image/20241119083922_descarga-4-4.jpg?s=900x600&e=t"
        alt="AQUI VA LA IMAGEN JAVIERA ALO"
    />
    <CardContent>
        <Typography gutterBottom variant="h5">EJEMPLO HOVER</Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis nostrum molestias eos velit aspernatur dolorum cumque voluptate tempora, quo iusto voluptas architecto eius. Maiores ducimus omnis officiis tempore quis?
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" sx={{
            transition: 'all 0.3s',
            '&:hover': { backgroundColor: 'primary.light', color: '#fff' }
        }}>SEGUIR</Button>
        <Button size="small" sx={{
            transition: 'all 0.3s',
            '&:hover': { backgroundColor: 'primary.light', color: '#fff' }
        }}>COMPARTIR</Button>
    </CardActions>
    </Card>
);

export default CardExample;
