import React from "react";


function PopUp({heading,setOpenmodal,openmodal}){
    return(
        <div className="modal-wrapper" open={openmodal}>
            <div className="container">
                <div className="modal-content-wrapper">
                    <div>
                        <h2>{heading}</h2>
                        <button className="btn btn-custom btn-lg" onClick={()=>setOpenmodal(false)}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PopUp;