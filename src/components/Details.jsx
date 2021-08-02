import React from "react";

const Details = ({ image, data, i }) => {
  return (
    <div className="card" style={{ display: "inline-flex",borderRadius:"20px",height: "400px",alignItems:"center", maxWidth: "700px" ,background:"linear-gradient(to top right, #51E1ED 0%, #03203C 100%)" }}>
      <div className="image" style={{ margin: "10px" }}>
        <img src={image} style={{ width: "300px", height: "300px",borderRadius:"35%",backgroundColor:"black" }} alt="" />
      </div>
      <div className="desc" style={{ margin: "10px" , color:"white",lineHeight:"1.6",fontSize:"1.1rem"}}>
        <h1> Step {i+1}</h1>
        {data}
      </div>
    </div>
  );
};

export default Details;
