import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

export const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState('user@example.com');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Implement logic to save changes to user profile
    setEditMode(false);
  };

  const handleChangePassword = () => {
    // Implement logic to change password
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Profile Page
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              disabled={!editMode}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              disabled={!editMode}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              disabled={!editMode}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          {editMode && (
            <Grid item xs={12}>
              <TextField
                id="currentPassword"
                label="Current Password"
                type="password"
                variant="outlined"
                fullWidth
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Grid>
          )}
          {editMode && (
            <Grid item xs={6}>
              <TextField
                id="newPassword"
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
          )}
          {editMode && (
            <Grid item xs={6}>
              <TextField
                id="confirmNewPassword"
                label="Confirm New Password"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </Grid>
          )}
        </Grid>
        <Box mt={2}>
          {editMode ? (
            <>
              <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
              <Button variant="contained" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={() => setEditMode(true)}>
                Edit Profile
              </Button>
              <Button variant="contained" color="secondary" onClick={handleChangePassword}>
                Change Password
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};
