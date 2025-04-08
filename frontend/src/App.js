import React from 'react';
import Scanner from './scanner'; 
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import RippleBackground from './components/RippleBackground';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RippleBackground />
      <Scanner />
    </ThemeProvider>
  );
}

export default App;