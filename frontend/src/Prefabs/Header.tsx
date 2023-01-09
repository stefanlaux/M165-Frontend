import * as React from "react";
import { Icon, IconButton, Typography } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../App.css";


export default function header(){
 


  return (
    <div>
      <IconButton className="document" href="/home#documentation">
        <ArticleIcon color="info"></ArticleIcon>
    </IconButton>
      <IconButton className="add" href="movies/add/">
          <AddCircleIcon color="info"></AddCircleIcon>
    </IconButton>
    <h1 className="headerTitle colorTitle">Movies</h1>
    <hr className="headerLine" />

  </div>
  );
}