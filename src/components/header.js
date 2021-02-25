import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "none",
    fontFamily: "Ubuntu, sans-serif",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "#8A2BE2",
    fontSize: "4rem",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Build Your Very Own Blog App!</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
