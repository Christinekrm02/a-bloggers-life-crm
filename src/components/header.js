import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Ubuntu, sans-serif",
  },
  appbar: {
    background: "none",
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

  articleTitle: {
    color: "#8A2BE2",
    fontSize: "75px",
    border: "none",
    padding: "10px",
    boxShadow: "5px 2px 5px 2px #9c689c ",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Dev.Admin</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.articleTitleContainer}>
        <h1 className={classes.articleTitle}>Build Your Very Own Blog App</h1>
      </div>
    </div>
  );
}
