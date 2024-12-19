import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

const ModalExample = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

return (
    <>
        <Button variant="contained" onClick={handleOpen}>
            ABRIR MODAL
        </Button>
        <Modal open={open} onClose={handleClose}>
            <Box 
            sx={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 300, 
            bgcolor: 'gray', 
            boxShadow: 24, 
            p: 4,
            borderRadius: 2,
            }}
        >
            <Typography variant="h6">EJEMPLO MODAL</Typography>
            <Typography sx={{ mt: 2 }}>Lorem ipsum, magnam untur dolores accusamus optio hic. Quos numquam accusantium ipsa?</Typography>
        </Box>
        </Modal>
    </>
);
};

export default ModalExample;
