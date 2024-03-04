import React from "react";
import { FaCircleCheck } from "react-icons/fa6";


function PopUp({ content, setOpenmodal, openmodal }) {
  return (
    <>
      {openmodal && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <div className="success-check">
                <FaCircleCheck/>
            </div>
            <span className="close" onClick={() => setOpenmodal(false)}>
              &times;
            </span>
            <div className="dialog-button">
              <h3>{content}</h3>
              
                <button
                  className="btn btn-custom btn-lg"
                  onClick={() => setOpenmodal(false)}
                >
                  Okay
                </button>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default PopUp;
