import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Demo from "./components/demo";
import PopUp from "./components/PopUp";
import Contact from "./components/contact"
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import Start from "./components/start";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
const light = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: green,
  },
});

const dark = createTheme({
  palette: {
    type: "dark",
    primary: purple,
    secondary: green,
  },
});

function App() {
  const classes = useStyles();
  const [darkmode, setDarkmode] = useState(false);
  const mode = createTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  return (
    <div className={classes.root}>
      
      <ThemeProvider theme={mode}>
        <CssBaseline />
{/* 
        <Demo darkmode={darkmode} setDarkmode={setDarkmode} />
        {/* <PopUp/> */}
        {/* <Contact/> */} 
        
      </ThemeProvider>
    </div>
  );
}

export default App;
