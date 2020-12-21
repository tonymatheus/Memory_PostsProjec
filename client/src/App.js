import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

const App = () => (
  <Container maxWidth="lg">
    <AppBar position="static" color="inherit">
      <Typography variant="h2">Memories</Typography>
    </AppBar>
  </Container>
);

export default App;
