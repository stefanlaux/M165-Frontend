import { Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Card from '../Prefabs/Card';
import './Movies.css';


interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  length: number;
  description: string;
}

export default function Movies() {

  const [movies, setMovies] = React.useState<Array<Movie>>([]);

  //Base URL is wrong
  axios.get('http://10.62.104.255:8080/movies/1').then((response) => {
    setMovies(response.data);
  });

  return (
    <div className='Movies'>
       
       {movies.map(
          (movies: {
            id: number;
            title: string;
            genre: string;
            releaseYear: number;
            length: number;
            description: string;
          }) => (
            <Grid key={movies.id} item xs={12} sm={6} md={4} lg={3}>
              <Card id={movies.id} title={movies.title} genre={movies.genre} length={movies.length}></Card>
            </Grid>
          )
        )}
       

        </div>
  );
}

