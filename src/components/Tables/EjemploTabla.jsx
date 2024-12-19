import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableExample = () => {
    const rows = [
    { name: 'Jungkook', age: 27, email: 'amormio@1.com' },
    { name: 'Soobin', age: 24, email: 'amormio@2.com' },
    { name: 'Heeseung', age: 23, email: 'amormio@3.com' },
    ];

    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead >ESTO ES UNA TABLA
            <TableRow>
            <TableCell>NOMBRE</TableCell>
            <TableCell>EDAD</TableCell>
            <TableCell>EMAIL</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, index) => (
            <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
};

export default TableExample;
