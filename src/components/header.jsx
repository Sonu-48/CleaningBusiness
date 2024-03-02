import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  // const user = localStorage.getItem("firstname");
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row intro-text">
              <div className="col-md-12" style={{ marginTop: "20px" }}>
                <div>
                  <h1 style={{ textShadow: "0px 3px 3px #5ca9fb" }}>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <Link
                    to="/signup"
                    className="btn btn-custom btn-lg page-scroll signup-btn"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
              {/* {user ? (
                <>
                  <div className="col-md-7" style={{ marginTop: "20px" }}>
                    <div className="business-cleaning-inner-section">
                      <h1 style={{ textShadow: "0px 4px 3px #5ca9fb" }}>
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                      </h1>
                      <p>{props.data ? props.data.paragraph : "Loading"}</p>
                      <Link
                        to="/signup"
                        className="btn btn-custom btn-lg page-scroll signup-btn"
                      >
                        SignUp
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5" style={{ marginTop: "20px" }}>
                    <CrmForm />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-12" style={{ marginTop: "20px" }}>
                    <div>
                      <h1 style={{ textShadow: "0px 3px 3px #5ca9fb" }}>
                        {props.data ? props.data.title : "Loading"}
                        <span></span>
                      </h1>
                      <p>{props.data ? props.data.paragraph : "Loading"}</p>
                      <Link
                        to="/signup"
                        className="btn btn-custom btn-lg page-scroll signup-btn"
                      >
                        SignUp
                      </Link>
                    </div>
                  </div>
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
