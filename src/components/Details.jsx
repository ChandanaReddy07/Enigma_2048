import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./details.css";
const Details = ({ image, data, i }) => {
  return (
    <div data-aos="fade-up">
      <div className="card">
        <div className="image" style={{ margin: "10px" }}>
          <img src={image} alt="" />
        </div>
        <div className="desc">
          <h1> Step {i + 1}</h1>
          {data}
        </div>
      </div>
    </div>
  );
};

export default Details;
