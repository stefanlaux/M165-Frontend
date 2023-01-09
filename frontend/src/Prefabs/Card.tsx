import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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
  const handleClick = () => {
    window.location.href = `/movies/${id}`;
  };


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
          <Button size="medium" className="detailsButton" onClick={handleClick}>
            Details
          </Button>
          <Button size="medium" className="detailsButton" onClick={handleClick}>
            <DeleteForeverIcon color="error"></DeleteForeverIcon>
          </Button>
        </CardActions>
      </Card>
  );
}