import React, { useEffect, useState } from "react";
//MATERIAL UI
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";

//NAVBAR
const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Articles`, path: `/articles-list` },
];
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
    justifyContent: "end",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0",
  },

  navbarContainer: {
    display: `flex`,
    justifyContent: `space-between`,
    maxWidth: "lg",
  },
  navItems: {
    display: `flex`,
    justifyContent: `flex-end`,
  },
  navLink: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#8A2BE2`,
  },
  articleTitleContainer: {
    textAlign: "center",
  },
  articleTitle: {
    color: "#8A2BE2",
    fontSize: "75px",
    textShadow: "5px 5px 4px #9c689c",
  },
  downIcon: {
    marginTop: "-10px",
    color: "#8A2BE2",
    fontSize: "5rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Container>
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>Dev.Admin</h1>

            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navItems}>
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.navLink}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}>
        <div className={classes.articleTitleContainer}>
          <h1 className={classes.articleTitle}>Build Your Very Own Blog App</h1>
          <IconButton>
            <KeyboardArrowDownIcon className={classes.downIcon} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
