import React, { Component } from "react";
import Details from "./Details";
import Carousel from "react-elastic-carousel";
import { Button, makeStyles } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    }
  }
  })
)
const data = [
  "Swipe the screen up, down, left, or right to move all number tiles in that direction. Each tile moves in that direction until it hits the wall or another tile.(Use your arrow keys in the computer version).Each time you make a move, a new 2 or 4 tile appears in an empty spot in a row or column that was moved last move.",
  "Try to get to 2048. When a move causes two tiles of the same number to hit each other, they merge into one tile with a value equal to the sum of the two tiles. For instance, two 2 tiles combine into a 4. The goal is to create a tile with a value of 2048.",
  "Pause and look ahead. It's easy to get sucked into the game and make moves as quickly as possible. If you want a better shot at winning, fight this impulse and only make a move when you're ready. Look ahead and try to imagine how the board will look after you make the next move, or at least what will happen to a few important tiles.",
  "Focus on a corner. A common strategy among players is to build up a high number in one corner. It doesn't matter what corner you pick, but once you pick, stick with it.This tactic works best when the corner is part of a row you keep permanently filled. This lets you move the tiles left to right without dislodging your high-value tile.",
  "Take opportunities to merge multiple tiles. If you see a long row of similar tiles, it's usually a good idea to combine them all and give yourself more room on the board.Combine the early tiles into a 16 or 32, and put it in a corner. The goal of this method is to keep this tile in place for as long as possible, gradually building it higher and higher",
  "Try alternate tapping up and right. One basic approach is to alternate tapping up and right until no squares are moving. Tap left when this happens, then go back to alternating up and right. This won't guarantee you a win - in fact, it usually won't get you there. However, it can get you a fairly high score, and it's a quick way to try to beat your previous record.",
];

const images = [
  "https://www.wikihow.com/images/thumb/9/99/Beat-2048-Step-8-Version-5.jpg/aid4511727-v4-728px-Beat-2048-Step-8-Version-5.jpg.webp",
  "https://www.wikihow.com/images/thumb/e/ef/Beat-2048-Step-9-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-9-Version-4.jpg.webp",
  "https://www.wikihow.com/images/thumb/0/09/Beat-2048-Step-10-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-10-Version-4.jpg.webp",
  "https://www.wikihow.com/images/thumb/5/51/Beat-2048-Step-11-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-11-Version-4.jpg.webp",
  "https://www.wikihow.com/images/thumb/b/b8/Beat-2048-Step-12-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-12-Version-4.jpg.webp",
  "https://www.wikihow.com/images/thumb/1/18/Beat-2048-Step-13-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-13-Version-4.jpg.webp",
];
const PopUp = () => {
  // handleClick = () => {
  //   this.props.toggle();
  // };

    const classes = useStyles();
    return (
      <div
      className={classes.root}
        id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginTop:"50px",
          justifyContent: "center",
        }}
      >
        <h1>&nbsp;</h1>
        <Carousel
          style={{ width: "1000px",  margin: "25px" }}
          breakPoints={breakPoints}
        >
          {[...Array(6)].map((_, index) => {
            return (
              <div key={index}>
                <Details image={images[index]} data={data[index]} i={index} />
              </div>
            );
          })}
        </Carousel>
        <Button
          style={{ margin: "10px",  fontSize:"1.5rem" ,backgroundColor:"rgb(248, 214, 246)"}}
          variant="contained"  
        >Proceed To Game</Button>
      </div>
    );
  }

  export default PopUp;
