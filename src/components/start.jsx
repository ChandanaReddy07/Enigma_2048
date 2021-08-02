import React from "react";
import "../start.css";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="shape">
          <div className="title">
            <h2>WITH ❤ BY ENIGMA TEAM</h2>
            <div style={{display:"flex"}}>
            <Link to="/Enigma_2048/about" className="button">
              {" "}
              INSTRUCTIONS
            </Link>
            <Link to="/Enigma_2048/game" className="button">
              {" "}
              START
            </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Start;
