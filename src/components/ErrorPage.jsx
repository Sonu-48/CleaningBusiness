import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-page-wrapper">
      <div className="container">
        <div className="error-content-wrapper">
          <div className="erorr-img-wrapper">
            <img src="/img/404-img-min.gif" alt="Error" loading="lazy" />
          </div>
          <h1>Oops!</h1>
          <b>404- PAGE NOT FOUND</b>
          <h4>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</h4>
          <button
            className="btn btn-custom btn-lg"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
