import { makeStyles } from "@material-ui/core/styles";
import projects from "../static/projects.js";
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
        <ProjectCard projects={projects[0]} />
      </div>
      )
    </div>
  );
}
