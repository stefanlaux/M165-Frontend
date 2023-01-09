import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import Add from './Movies/Add/Add';
import Id from './Movies/Id/Id';

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
    <Route path="/movies/:id" element={<Id />} />
    <Route path="/movies/add" element={<Add />} />   
  </Routes>

    </div>
    </ThemeProvider>
  );
}

export default App;
