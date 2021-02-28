import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
  },
  media: {
    height: 240,
  },
  title: {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  description: {
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
        image={process.env.PUBLIC_URL + "/assets/movieapp.jpg"}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}>
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h1"
          className={classes.description}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          TUTORIAL
        </Button>
        <Button size="small" color="primary">
          VISIT
        </Button>
      </CardActions>
    </Card>
  );
}
