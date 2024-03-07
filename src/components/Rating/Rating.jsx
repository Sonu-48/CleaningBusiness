import React from "react";

const Rating = () => {
  return (
    <div className="rating-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="rating-item-box">
              <img src="/img/google-rating.svg" alt="Google Rating" loading="lazy"/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="rating-item-box">
              <img src="/img/crowed-rating.svg" alt="Crowd Rating" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="rating-item-box">
              <img src="/img/Capterra-rating.svg" alt="Capterra Rating" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rating;
