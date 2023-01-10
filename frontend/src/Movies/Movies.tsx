import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Prefabs/Card';
import './Movies.css';
import Header from '../Prefabs/Header';
import { animate } from "motion"


interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  length: number;
  description: string;
}

export default function Movies() {

  const [movies, setMovies] = React.useState([]);

  useEffect(() =>{
    axios.get('http://10.62.105.7:8080/movies/').then((response) => {
      setMovies(response.data);
    });
  }, [])


  return (
    <div className='Movies'>

      <Header></Header>
      <br />
      <br />
      <Grid
        container
        spacing={5}
        className={"gridContainer"}
        justifyContent="center"
      >
        <br />
        <br />
       {movies && Array.isArray(movies) && movies.map(
          (movies: {
            id: number;
            title: string;
            genre: string;
            releaseYear: number;
            length: number;
            description: string;
          }) => (
            <Grid className='aniGrid' key={movies.id} item xs={12} sm={6} md={4} lg={3}>
              <Card id={movies.id} title={movies.title} genre={movies.genre} length={movies.length}></Card>
            </Grid>
          )
        )}
      </Grid>
       
        </div>
  );
}

