import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./cards/project-card.js";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
}));

export default function FeaturedProjects() {
  const classes = useStyles();
  return (
    <div>
      return(
      <div className={classes.root}>
        <ProjectCard />
      </div>
      )
    </div>
  );
}
