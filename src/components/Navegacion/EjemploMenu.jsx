import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const DrawerExample = () => {
    const [open, setOpen] = useState(false);

    return (
    <>
        <Button variant="contained" onClick={() => setOpen(true)}>Abrir Menu</Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
            {['ITEM 1', 'ITEM 2', 'ITEM 3'].map((text, index) => (
            <ListItem button key={index}>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Drawer>
    </>
    );
};

export default DrawerExample;
