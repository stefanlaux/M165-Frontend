import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Movies/Movies';

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
    <Route path="/home" element={<Home />} />   
    <Route path='/' element={<Home />} />
    <Route path="/movies" element={<Movies />} />   
  </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;
