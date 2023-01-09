import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Id.css"

interface Movie {
    id: number;
    title: string;
    genre: string;
    releaseYear: number;
    length: number;
    description: string;
  }

export default function Id() {

    const { id } = useParams();
    const [movies, setMovies] = React.useState(
        {
            id: 0,
            title: "",
            genre: "",
            releaseYear: 0,
            length: 0,
            description: "",
          }
    );

    useEffect(() =>{
      axios.get('http://10.62.105.47:8080/movies/' + id).then((response) => {
        setMovies(response.data);
      });
    }, [])



  return (
    <div>
    <div className="normalDetails">
      
        <p>Title:</p>
        <h3>
          {movies.title}
        </h3>
        <br />
        <p>Genre:</p>
        <h3>
          {movies.genre}
        </h3>
        <br />
        <p>Release Year:</p>
        <h3>
          {movies.releaseYear}
        </h3>
        <br />
        <p>Description:</p>
        <h3>
          {movies.description}
        </h3>
        
    </div>
    <div className="idDisplay">
      <h1>{movies.length} min</h1>
    </div>
  </div>
  );
}

