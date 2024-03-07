import React from "react";
import { Link } from "react-router-dom";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                 <div className="feature-item">
                 <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                 </div>
                </div>
              ))
            : "Loading..."}
        </div>
        <div style={{marginTop:'50px'}}>
        <Link to="/signup"
                 
                 className="btn btn-custom btn-lg page-scroll signup-btn"
               >
                Free SignUp
               </Link>
        </div>
      </div>
    </div>
  );
};
