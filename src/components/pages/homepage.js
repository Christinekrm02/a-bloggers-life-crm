import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Header from "../header";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* eliminate padding and margin */}
      <CssBaseline />
      <Header />
    </div>
  );
}
