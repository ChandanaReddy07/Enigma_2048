import {
  AppBar,
  Toolbar,
  IconButton,
  Collapse,
  Paper,
  Switch,
} from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import PopUp from "./PopUp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Nunito",
    background: "white",
  },
  appbar: {
    background: "white",
    color: "black",
    // height:"80px"
  },
  appname: {
    flexGrow: "3",
    fontFamily: "Righteous",
    fontSize: "40px",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    margin: "10px",
    fontSize: "20px",
    fontFamily: "Source Sans Pro",
    color: "grey",
    flexGrow: "1.5",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
  },
  colorText: {
    color: "green",
    fontSize: "4rem",
    fontFamily: "Roboto Condensed",
  },
  container: {
    width: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flexGrow: "3",
    color: "black",
    fontSize: "2.5rem",
    fontFamily: "Lato",
  },

  container1: {
    flexGrow: "3",
    width: "200px",
  },
  goDown: {
    color: "green",
    fontSize: "2rem",
  },
  image: {
    width: "500px",
    height: "540px",
    marginTop: "100px",
  },
}));

function Demo({ darkmode, setDarkmode }) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appname}>
            Enig<span style={{ color: "green" }}>Ma</span>
          </h1>

          <Scroll to="about" smooth={true}>
            <h1 className={classes.appbarTitle}>ABOUT</h1>
          </Scroll>

          <Link to="/game">
            <h1 className={classes.appbarTitle}>GAME</h1>
          </Link>

          <Scroll to="contact" smooth={true}>
            <h1 className={classes.appbarTitle}>CONTACT</h1>
          </Scroll>

          <Switch
            checked={darkmode}
            onClick={() => {
              setDarkmode(!darkmode);
            }}
          >
            MODE
          </Switch>
        </Toolbar>
      </AppBar>
      <h1>&nbsp;</h1>
      <PopUp />
    </div>
  );
}

export default Demo;
