import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

export const SignUp = () => {
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
        Signup Form
      </Typography>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Box>
  );
};
