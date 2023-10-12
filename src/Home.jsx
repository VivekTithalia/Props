import React from "react";

const Home = (props) => {
  return (
    <>
      
      <div className="container">
        <div className="items">
          <div className="forimg">
            <img src={props.ime} alt="" />
          </div>
          <div className="title">
            <h2>{props.title}</h2>
          </div>
          <div className="para">
            <p>
              {props.para}
            </p>
          </div>
          <div className="forbutton">
            <button className="btn">View More</button>
          </div>
        </div>
        <div className="items">
          <div className="forimg">
            <img src={props.ime2} alt="" />
          </div>
          <div className="title">
            <h2>{props.title2}</h2>
          </div>
          <div className="para">
            <p>
             {props.para2}
            </p>
          </div>
          <div className="forbutton">
            <button className="btn">View More</button>
          </div>
        </div>
        <div className="items">
          <div className="forimg">
            <img src={props.ime3} alt="" />
          </div>
          <div className="title">
            <h2>{props.title3}</h2>
          </div>
          <div className="para">
            <p>
              {props.para3}
            </p>
          </div>
          <div className="forbutton">
            <button className="btn">View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
