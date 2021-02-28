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
    maxWidth: 400,
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

export default function ProjectCard(/*projects*/) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + "/assets/movieapp.jpg"}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}>
          {/* {projects.title} */}
          The Theaters are Open!
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h1"
          className={classes.description}>
          {/*projects.description*/}
          2020 is over, movie theaters are set to reopen in 2021! Find reviews
          for new and old movies with a simple search.
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
