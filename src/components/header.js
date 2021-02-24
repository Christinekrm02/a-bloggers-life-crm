import React from "react";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(theme => ({}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <h1>Build Your Very Own Blog App!</h1>
        <IconButton>
          <SortIcon />
        </IconButton>
      </AppBar>
    </div>
  );
}
