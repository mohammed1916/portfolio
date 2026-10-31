import React from 'react';
import { Typography, Box } from '@mui/material';

function TestApp() {
  return (
    <Box p={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Test App - React is Working!
      </Typography>
      <Typography variant="body1">
        If you can see this text, React and MUI are working correctly.
      </Typography>
    </Box>
  );
}

export default TestApp;
