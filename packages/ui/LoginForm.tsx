import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onLogin(email,password)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { my: 2, width: '100%', maxWidth: '400px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // Set the container to take at least the full viewport height
                bgcolor: '#f0f0f0',
                p: 4,
                borderRadius: '8px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" gutterBottom>
                Login Form
            </Typography>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="button" variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSubmit}>
                Submit
            </Button>submit
        </Box>
    );
};
