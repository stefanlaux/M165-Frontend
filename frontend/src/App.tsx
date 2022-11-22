import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">

  <Routes>
    <Route path="/login" element={<Login />} />
  
  </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;
