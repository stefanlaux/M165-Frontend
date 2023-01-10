import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";



interface props {
  id: number;
  title: string;
  genre: string;
  length: number;
}

export default function card({
  id,
  title,
  genre,
  length,
}: props) {
  const handleDetails = () => {
    window.location.href = `/movies/${id}`;
  };

  const handleDelete = () => {
    axios.delete('http://10.62.105.7:8080/movies/' + id).then((response) => {
      window.location.href = `/movies/`;
    });
  }


  return (
      <Card sx={{ minWidth: 200, maxWidth: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {id}
          </Typography>
          <Typography variant="h5" component="div" className="whitespace" >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {genre}
          </Typography>
          <Typography variant="body2">{length}min</Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" className="detailsButton" onClick={handleDetails}>
            Details
          </Button>
          <Button size="medium" className="detailsButton" onClick={handleDelete}>
            <DeleteForeverIcon color="error"></DeleteForeverIcon>
          </Button>
        </CardActions>
      </Card>
  );
}