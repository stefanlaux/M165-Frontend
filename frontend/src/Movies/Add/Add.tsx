import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import "./Add.css"


export default function Add() {

  const [title, setTitle] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [length, setLength] = React.useState(0);
  const [release, setRelease] = React.useState(0);
  const [description, setDescription] = React.useState("");


  const handleClick = () => { 

    console.log(title);


    axios.post('http://10.62.105.7:8080/movies/', {
        title: title,
        genre: genre,
        releaseYear: release,
        length: length,
        description: description
    }).then((response) => {
      window.location.href = "/movies";
    });
  }


  return (
    <>
    <h1>Add Movie</h1>
     <div className='Add'>
      
        <TextField id="standard-basic title" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <TextField id="standard-basic genre" label="Genre" variant="standard"  onChange={(e) => setGenre(e.target.value)} />
        <br />
        <TextField id="standard-basic length" label="Length (min)" variant="standard" type={"number"} onChange={(e) => setLength(parseInt(e.target.value))} />
        <br />
        <TextField id="standard-basic release" label="Release Year" variant="standard" type={"number"} onChange={(e) => setRelease(parseInt(e.target.value))} />
        <br />
        <TextField id="standard-basic description" multiline label="Description" variant="standard"  onChange={(e) => setDescription(e.target.value)} />
        <br />
        <Button onClick={handleClick}>Add</Button>
    </div>
   
    </>
   
  );
}

