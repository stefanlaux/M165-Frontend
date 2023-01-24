import * as React from "react";
import { Icon, IconButton, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../App.css";


export default function header(){
 


  return (
    <div>
      <IconButton className="document" href="/home">
        <HomeIcon color="info"></HomeIcon>
    </IconButton>
      <IconButton className="add" href="/movies/add/">
          <AddCircleIcon color="info"></AddCircleIcon>
    </IconButton>
    <h1 className="headerTitle colorTitle">Movies</h1>
    <hr className="headerLine" />

  </div>
  );
}